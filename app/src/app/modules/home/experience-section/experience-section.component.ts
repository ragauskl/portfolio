import { Component, ViewChild, OnDestroy, AfterViewInit } from '@angular/core'
import moment from 'moment'
import { Subject, Subscription } from 'rxjs'
import color from 'color'
import { ViewService } from '@core/services/view.service'
import browserUtil from '@core/utils/browser.util'
import { HorizontalTabPairComponent } from '@core/components/layout/horizontal-tab-pair/horizontal-tab-pair.component'
import { Content, Experience } from '@core/utils/content'

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss']
})
export class ExperienceSectionComponent implements OnDestroy, AfterViewInit {
  private _subscriptions = new Subscription()
  readonly drawGrid = false
  commits: (
    Experience.Commit & {
      shortStartCurve?: boolean
      shortEndCurve?: boolean
    }
  )[] = []
  nodes: GraphNode[] = []
  // Will be ignored if history element has focused prop defined
  selectedIndex: number = 19
  private _focusedNode?: GraphNode
  private readonly _ySkip = 2
  private history!: Experience.History

  @ViewChild('tabGroup') tabGroup!: HorizontalTabPairComponent

  constructor (
    public viewService: ViewService
  ) {
    this.history = Content.ExperienceHistory
    this.commits = this.history.commits.sort(
      (a, b) => {
        const date1 = moment(a.date, 'YYYY-MMM')
        const date2 = moment(b.date, 'YYYY-MMM')
        return date1.isAfter(date2) ?
        1 : (
          // If same date, keep original order
          date1.isSame(date2) ? 1 : -1
        )
      }
    )

    for (const commit of this.commits) {
      const branch = this.history.branches.find(x => x.branch === commit.branch)
      commit.color = branch.color
    }
  }

  ngAfterViewInit () {
    setTimeout(() => {
      this._subscriptions.add(
        this.viewService.viewModeChange.subscribe(() => this.RenderGraph())
      )
    }, 1)
  }

  onSelectedChange (index: number) {
    const node = this.nodes.find(x => x.index === index)
    if (!node) return

    if (!node.focused) {
      node.focused = true
      this.CenterNode(node)
    }
  }

  onTabChange () {
    setTimeout(() => {
      const node = this.nodes.find(x => x.focused)
      if (node) this.CenterNode(node, true)
    }, 200)
  }

  ngOnDestroy () {
    this._subscriptions.unsubscribe()
  }

  private RenderGraph () {
    const columns = this.history.branches.length
    const rows = this.history.commits.length * this._ySkip - 1

    const parent = document.getElementById('experience-graph')
    if (!parent) return

    const cellSize = this.viewService.mobile ? 20 : 30
    const height = rows * cellSize
    const getX = (x: number) => cellSize * (x - 0.5) + 5
    const getY = (y: number) => height - (cellSize * (y - this._ySkip)) + 5
      // Calculate grid rows/columns (maxX, maxY)
      // X1 = left, Y1 = down, so yq = maxH - size * q
    const grid = this.GetGridTemplate(cellSize, rows + 2, columns)
    if (parent.firstChild) parent.removeChild(parent.firstChild)
    parent.appendChild(grid)

    const calculatePositions = () => {
        // First commit must be on master
        // If branch has closed commit, there must be at least one more previous commit
      let activeBranches = new Set()
      let y = -1
      for (const commit of this.commits) {
        y += this._ySkip
        commit.y = y

        const branch: Experience.BranchElement = this.history.branches.find(x => x.branch === commit.branch)
        if (!branch) {
          console.warn(`Branch '${commit.branch}' undefined.`)
          continue
        }
        activeBranches.add(branch.branch)

        if (branch.x === undefined) branch.x = activeBranches.size
        commit.x = branch.x

        if (commit.closed) activeBranches.delete(branch.branch)
      }
    }

    const findMaxXAtY = (y: number, startX: number) => {
      let maxX: number | undefined

      for (const el of this.history.branches) {
        const commits = this.commits.filter(x => x.branch === el.branch)
        const compareX = commits[0].x
        if (compareX <= startX) continue

        if (commits.some(c => c.y < y) && commits.some(c => c.y > y)) {
          if (!maxX || maxX < compareX) maxX = compareX
          continue
        }
      }
      return maxX
    }

    let maxY = 1

    const createNodes = () => {
      this.nodes = this.commits.map((commit, i) => {
        const node = new GraphNode(
          this.viewService,
          commit,
          cellSize,
          { x: getX(commit.x), y: getY(commit.y) },
          getX(findMaxXAtY(commit.y, commit.x) || commit.x),
          i
        )

        const nextCommit = this.commits[i + 1]
        if (nextCommit && commit.closed) {
          const firstInBranch = this.commits.find(c => c.branch === nextCommit.branch) === nextCommit
          if (firstInBranch) {
            commit.shortEndCurve = true
            nextCommit.shortStartCurve = true
          }
        }
        if (commit.y > maxY) maxY = commit.y

        if (node.focused) {
          this._focusedNode = node
          this.selectedIndex = i
        }

        node.onFocusChange.subscribe(focused => this.NodeFocusedChanged(node, focused))
        node.onClick.subscribe(() => {
          if (this.tabGroup.compact) {
            if (this.tabGroup.selectedIndex === 0) this.tabGroup.selectTab(1)
          }
        })

        return node
      })

    }

    const renderTitles = () => {
      for (const node of this.nodes) {
        grid.appendChild(node.titleGroup)
      }
    }

    const renderNodes = () => {
      for (const node of this.nodes) {
        grid.appendChild(node.nodeObj)
      }
      if (this._focusedNode) this.CenterNode(this._focusedNode)
    }

    const renderBranches = () => {
      const drawLine = (x1: number, y1: number, x2: number, y2: number, rounded?: boolean) => {
        const el = document.createElementNS('http://www.w3.org/2000/svg', 'line')
        el.setAttributeNS(null, 'stroke-width', `${cellSize * 0.2}`)
        el.setAttributeNS(null, 'x1', `${getX(x1)}`)
        el.setAttributeNS(null, 'y1', `${getY(y1)}`)
        el.setAttributeNS(null, 'x2', `${getX(x2)}`)
        el.setAttributeNS(null, 'y2', `${getY(y2)}`)
        if (rounded) {
          el.setAttributeNS(null, 'stroke-linecap', 'round')
        }
        return el
      }

      const drawCurve = (x1: number, y1: number, x2: number, y2: number) => {
        const el = document.createElementNS('http://www.w3.org/2000/svg', 'path')
          // M 0 200 C 0 150 50 150 50 100
        const yDiff = (y2 - y1) / 2
        const d = `M ${getX(x1)} ${getY(y1)} C ${getX(x1)} ${getY(y1 + yDiff)} ${getX(x2)} ${getY(y1 + yDiff)} ${getX(x2)} ${getY(y2)}`

        el.setAttributeNS(null, 'stroke-width', `${cellSize * 0.2}`)
        el.setAttributeNS(null, 'd', d)
        el.setAttributeNS(null, 'fill', 'none')
        return el
      }

      const functions: {[key: number]: any[]} = {}
      for (const el of this.history.branches) {
        const commits = this.commits.filter(x => x.branch === el.branch)
        const appendLine = (line) => {
          line.setAttributeNS(null, 'stroke', el.color)
          grid.appendChild(line)
        }
        const { x: startX, y: startY } = commits[0]
        let { x: lastX, y: lastY } = commits[commits.length - 1]

          // draw line
        if (el.branch === 'master') {
          lastY = maxY
        }

        const line = drawLine(startX, startY, lastX, lastY, el.branch === 'master')
        if (!functions[el.x]) functions[el.x] = []
        functions[el.x].push(() => appendLine(line))

        if (el.origin) {
          const origin = this.history.branches.find(x => x.branch === el.origin)
          if (origin) {
            const forkCommit = this.commits.slice(0, this.commits.indexOf(commits[0]))
                .reverse()
                .find(x => x.branch === origin.branch)

            if (forkCommit) {
              const yOffset = commits[0].shortStartCurve ? this._ySkip / 3 * 2 : this._ySkip
              const curve = drawCurve(origin.x, startY - yOffset, startX, startY)
              functions[el.x].push(() => appendLine(curve))
            }

            const lastCommit = commits[commits.length - 1]
            if (lastCommit.closed) {
              const yOffset = lastCommit.shortEndCurve ? this._ySkip / 3 * 2 : this._ySkip
              const curve = drawCurve(lastX, lastY, origin.x, lastY + yOffset)
              appendLine(curve)
              functions[el.x].push(() => appendLine(curve))
            }
          }
          Object.keys(functions).sort((a, b) => a <= b ? 1 : -1).forEach(x =>
              functions[x].forEach(f => f())
            )
        }
      }
    }

    calculatePositions()
    createNodes()
    renderTitles()
    renderBranches()
    renderNodes()
  }

  private NodeFocusedChanged (node: GraphNode, focused: boolean) {
    if (focused) {
      this.selectedIndex = node.index

      if (this._focusedNode) this._focusedNode.focused = false
      this._focusedNode = node

      if (this.tabGroup.compact) {
        if (this.tabGroup.selectedIndex === 0) this.tabGroup.selectTab(1)
      }
    }
  }

  private CenterNode (node: GraphNode, onInit = false) {
    const parent = document.getElementById('experience-graph-container')
    if (!parent) return

    const { y, height } = node.nodeObj.getBBox()

    parent.scrollTo({
      top: y + height * 2 - parent.clientHeight / 2,
      behavior: !onInit ? 'smooth' : undefined
    })
  }

  private GetGridTemplate (size: number, rows: number, columns: number) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    // svg.setAttributeNS(null, 'width', `${size * columns + 1}px`)
    svg.setAttributeNS(null, 'width', `100%`)
    svg.setAttributeNS(null, 'height', `${size * rows + 1}px`)
    svg.style.margin = 'auto'

    if (this.drawGrid) {
      const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs')
      const pattern = document.createElementNS('http://www.w3.org/2000/svg', 'pattern')
      pattern.setAttributeNS(null, 'id', 'grid')
      pattern.setAttributeNS(null, 'width', `${size}`)
      pattern.setAttributeNS(null, 'height', `${size}`)
      pattern.setAttributeNS(null, 'patternUnits', 'userSpaceOnUse')

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      path.setAttributeNS(null, 'd', `M ${size} 0 L 0 0 0 ${size}`)
      path.setAttributeNS(null, 'fill', 'none')
      path.setAttributeNS(null, 'stroke', 'gray')
      path.setAttributeNS(null, 'stroke-width', '1')

      pattern.appendChild(path)
      defs.appendChild(pattern)
      svg.appendChild(defs)

      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
      rect.setAttributeNS(null, 'fill', 'url(#grid)')
      rect.setAttributeNS(null, 'width', '100%')
      rect.setAttributeNS(null, 'height', '100%')

      svg.appendChild(rect)
    }

    return svg
  }
}

function matchEveniness (target: number, input: number) {
  if (Math.round(target) % 2 === 0) {
    if (Math.round(input) % 2 !== 0) input--
  } else {
    if (Math.round(input) % 2 === 0) input--
  }
  return input
}
class GraphNode {
  private _focused = false
  get focused () {
    return this._focused
  }
  set focused (val: boolean) {
    if (val === this._focused) {
      this._click.next()
      return
    }
    this._focused = val
    this.commit.focused = val
    this._focusChange.next(this._focused)

    if (this._focused) {
      this.nodeObj.classList.add('focused')
    } else {
      this.nodeObj.classList.remove('focused')
    }
  }

  titleGroup: SVGGElement
  private _titleBackground: SVGRectElement

  nodeObj: SVGForeignObjectElement

  col: color

  private _focusChange = new Subject<boolean>()
  get onFocusChange () {
    return this._focusChange.asObservable()
  }

  private _click = new Subject<void>()
  get onClick () {
    return this._click.asObservable()
  }

  constructor (
    private viewService: ViewService,
    public commit: Experience.Commit,
    private size: number,
    private position: {x: number, y: number},
    private textX: number,
    public index: number
  ) {
    this.col = color(this.commit.color || 'black').rgb()
    this.CreateTitleGroup()
    this.CreateBubble()

    this.focused = !!commit.focused
  }

  private CreateBubble () {
    this.nodeObj = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject')
    this.nodeObj.setAttributeNS(null, 'width', `${this.size}`)
    this.nodeObj.setAttributeNS(null, 'height', `${this.size}`)
    this.nodeObj.setAttributeNS(null, 'x', `${this.position.x - this.size / 2}`)
    this.nodeObj.setAttributeNS(null, 'y', `${this.position.y - this.size / 2}`)
    // this.nodeGroup.appendChild(bubbleFor)
    this.nodeObj.classList.add('graph-node-obj')

    const nodeEl = document.createElement('div')
    nodeEl.className = 'graph-node'
    nodeEl.style.background = `${this.col.toString()}`

    const lightDiv = document.createElement('div')
    lightDiv.className = 'graph-node-light'
    nodeEl.appendChild(lightDiv)

    const bubbleFiller = document.createElement('div')
    bubbleFiller.className = 'graph-node-filler'
    bubbleFiller.style.width = `${matchEveniness(this.size, this.size * 0.7)}px`
    bubbleFiller.style.height = `${matchEveniness(this.size, this.size * 0.7)}px`
    nodeEl.appendChild(bubbleFiller)

    this.nodeObj.append(nodeEl)
    nodeEl.onmouseover = () => {
      if (!this.viewService.mobile) this.focused = true
    }
    nodeEl.onclick = () => this.focused = true
  }

  private CreateTitleGroup () {
    this.titleGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    this.titleGroup.style.cursor = 'pointer'

    this._titleBackground = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
    this._titleBackground.setAttributeNS(null, 'x', `${this.position.x - this.size * 0.65}`)
    this._titleBackground.setAttributeNS(null, 'y', `${this.position.y - this.size * 0.73}`)
    this._titleBackground.setAttributeNS(null, 'width', `110%`)
    this._titleBackground.setAttributeNS(null, 'height', `${this.size * 1.5}`)
    this._titleBackground.setAttributeNS(null, 'fill', `${this.commit.color || 'black'}`) // this.commit.color ||
    this._titleBackground.setAttributeNS(null, 'rx', `${this.size}`)
    this._titleBackground.style.opacity = '0.05'

    const titleEdge = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
    titleEdge.setAttributeNS(null, 'x', `99%`)
    titleEdge.setAttributeNS(null, 'y', `${this.position.y - this.size * 0.73}`)
    titleEdge.setAttributeNS(null, 'width', `1%`)
    titleEdge.setAttributeNS(null, 'height', `${this.size * 1.5}`)
    titleEdge.setAttributeNS(null, 'fill', `${this.commit.color || 'black'}`)

    const forTitle = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject')

    if (browserUtil.isSafari) {
      forTitle.setAttributeNS(null, 'width', `54%`)
      forTitle.setAttributeNS(null, 'height', `${this.size}`)
    } else {
      forTitle.setAttributeNS(null, 'width', `calc(97% - 70px - ${this.textX + this.size}px)`)
      forTitle.setAttributeNS(null, 'height', `${this.size}`)
    }

    forTitle.setAttributeNS(null, 'x', `${this.textX + this.size * 0.75}`)
    forTitle.setAttributeNS(null, 'y', `${this.position.y - this.size / 2}`)

    const titleObj = document.createElement('div')
    titleObj.className = 'graph-title-wrap'
    forTitle.append(titleObj)

    const title = document.createElement('span')
    title.style.color = `${color(this.commit.color).darken(0.2).hex() || 'black'}`
    title.innerHTML = this.commit.comment
    title.className = 'graph-title'
    title.style.fontSize = `${this.size / 2}px`
    titleObj.appendChild(title)

    const date = document.createElementNS('http://www.w3.org/2000/svg', 'text')
    date.innerHTML = moment(this.commit.date, 'YYYY-MMM').format('MMM YYYY')
    date.setAttributeNS(null, 'x', `97%`)
    date.setAttributeNS(null, 'y', `${this.position.y}`)
    date.setAttributeNS(null, 'dominant-baseline', `middle`)
    date.setAttributeNS(null, 'text-anchor', `end`)
    date.setAttributeNS(null, 'fill', `${color(this.commit.color).darken(0.2).hex() || 'black'}`)
    date.style.fontSize = `${this.size / 2}px`

    this.titleGroup.appendChild(this._titleBackground)
    this.titleGroup.appendChild(forTitle)
    this.titleGroup.appendChild(date)
    this.titleGroup.appendChild(titleEdge)

    this.titleGroup.onclick = () => {
      this.focused = true
    }
  }
}
