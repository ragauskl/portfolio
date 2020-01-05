import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import moment from 'moment'
import { Subject, fromEvent } from 'rxjs'
import color from 'color'
import { ViewService } from '@core/services/view.service'
import { auditTime } from 'rxjs/operators'
// TODO:
// Flexible layout

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss']
})
export class ExperienceSectionComponent implements OnInit {
  readonly drawGrid = false
  commits: Commit[] = []
  nodes: GraphNode[] = []
  selectedIndex: number = 19
  private _focusedNode?: GraphNode
  private readonly _ySkip = 2
  private history!: History

  constructor (
    private http: HttpClient,
    public viewService: ViewService
  ) {}

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

  ngOnInit () {
    this.RenderGraph()

    fromEvent(window, 'resize').pipe(
      auditTime(500)
    ).subscribe(() => this.RenderGraph())
  }

  private async RenderGraph () {
    if (!this.history) this.history = await this.http.get('assets/history.json').toPromise() as History

    const columns = this.history.branches.length
    const rows = this.history.commits.length * this._ySkip - 1

    const parent = document.getElementById('experience-graph')
    const cellSize = 30
    const height = rows * cellSize
    const getX = (x) => cellSize * (x - 0.5) + 10
    const getY = (y) => height - (cellSize * (y - 0.5)) + 5
      // Calculate grid rows/columns (maxX, maxY)
      // X1 = left, Y1 = down, so yq = maxH - size * q
    const grid = this.GetGridTemplate(cellSize, rows + 2, columns)
    if (parent.firstChild) parent.removeChild(parent.firstChild)
    parent.appendChild(grid)

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

    const calculatePositions = () => {
        // First commit must be on master
        // If branch has closed commit, there must be at least one more previous commit
      let activeBranches = new Set()
      let y = -1
      for (const commit of this.commits) {
        y += this._ySkip
        commit.y = y

        const branch: BranchElement = this.history.branches.find(x => x.branch === commit.branch)
        if (!branch) {
          console.warn(`Branch '${commit.branch}' undefined.`)
          continue
        }
        activeBranches.add(branch.branch)

        if (branch.x === undefined) branch.x = activeBranches.size
        commit.x = branch.x

        if (commit.closed) activeBranches.delete(branch.branch)
        commit.color = branch.color
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

    const createNodes = () => {
      this.nodes = this.commits.map((commit, i) => {
        const node = new GraphNode(
            commit,
            cellSize,
            { x: getX(commit.x), y: getY(commit.y) },
            getX(findMaxXAtY(commit.y, commit.x) || commit.x),
            i
          )

        if (node.focused) {
          this._focusedNode = node
          this.selectedIndex = i
        }

        node.onFocusChange.subscribe(focused => this.NodeFocuseChanged(node, focused))

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
        grid.appendChild(node.nodeGroup)
      }
      if (this._focusedNode) this.CenterNode(this._focusedNode)
    }

    const renderBranches = () => {
      const drawLine = (x1, y1, x2, y2) => {
        const el = document.createElementNS('http://www.w3.org/2000/svg', 'line')
        el.setAttributeNS(null, 'stroke-width', `${cellSize * 0.2}`)
        el.setAttributeNS(null, 'x1', `${getX(x1)}`)
        el.setAttributeNS(null, 'y1', `${getY(y1)}`)
        el.setAttributeNS(null, 'x2', `${getX(x2)}`)
        el.setAttributeNS(null, 'y2', `${getY(y2)}`)
        return el
      }

      const drawCurve = (x1, y1, x2, y2) => {
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
        const { x: lastX, y: lastY } = commits[commits.length - 1]

          // draw line
        const line = drawLine(startX, startY, lastX, lastY)
        if (!functions[el.x]) functions[el.x] = []
        functions[el.x].push(() => appendLine(line))

        if (el.origin) {
          const origin = this.history.branches.find(x => x.branch === el.origin)
          if (origin) {
            const forkCommit = this.commits.slice(0, this.commits.indexOf(commits[0]))
                .reverse()
                .find(x => x.branch === origin.branch)

            if (forkCommit) {
              const curve = drawCurve(origin.x, startY - this._ySkip, startX, startY)
              functions[el.x].push(() => appendLine(curve))
            }

            const lastCommit = commits[commits.length - 1]
            if (lastCommit.closed) {
              const curve = drawCurve(lastX, lastY, origin.x, lastY + this._ySkip)
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

  private NodeFocuseChanged (node: GraphNode, focused: boolean) {
    if (focused) {
      this.selectedIndex = node.index

      if (this._focusedNode) this._focusedNode.focused = false
      this._focusedNode = node
    }
  }

  private CenterNode (node: GraphNode, onInit = false) {
    const parent = document.getElementById('experience-graph-container')
    if (!parent) return

    const { y, height } = node.nodeGroup.getBBox()

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

type Branch = 'master' | string
export interface History {
  branches: BranchElement[]
  commits: Commit[]
}

export interface BranchElement {
  branch: Branch
  origin?: Branch
  color: string
  x?: number
}

export interface Commit {
  date: string
  branch: Branch
  comment: string
  description?: string
  closed?: boolean
  x?: number
  y?: number
  color?: string
  focused?: true
  el?: SVGGElement
}

class GraphNode {
  private _focused = false
  get focused () {
    return this._focused
  }
  set focused (val: boolean) {
    if (val === this._focused) return
    this._focused = val
    this._focusChange.next(this._focused)

    if (this._focused) {
      this._svgCircle.setAttributeNS(null, 'r', `${this.size * 0.45 * 1.2}`)
      this._svgFiller.setAttributeNS(null, 'r', `${this.size * 0.35 * 1.1}`)
      this._svgFiller.setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 1)')
      this._titleBackground.style.opacity = '0.2'
    } else {
      this._svgCircle.setAttributeNS(null, 'r', `${this.size * 0.45}`)
      this._svgFiller.setAttributeNS(null, 'r', `${this.size * 0.35}`)
      this._svgFiller.setAttributeNS(null, 'fill', 'transparent')
      this._titleBackground.style.opacity = '0.05'
    }
  }

  titleGroup: SVGGElement
  private _titleBackground: SVGRectElement

  nodeGroup: SVGGElement
  private _svgCircle: SVGCircleElement
  private _svgFiller: SVGCircleElement

  private _focusChange = new Subject<boolean>()
  get onFocusChange () {
    return this._focusChange.asObservable()
  }

  constructor (
    public commit: Commit,
    private size: number,
    position: {x: number, y: number},
    textX: number,
    public index: number
  ) {
    this.titleGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    this.titleGroup.style.cursor = 'pointer'

    this._titleBackground = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
    this._titleBackground.setAttributeNS(null, 'x', `${position.x - size * 0.6} `)
    this._titleBackground.setAttributeNS(null, 'y', `${position.y - size * 0.75}`)
    this._titleBackground.setAttributeNS(null, 'width', `110%`)
    this._titleBackground.setAttributeNS(null, 'height', `${size * 1.5}`)
    this._titleBackground.setAttributeNS(null, 'fill', `${commit.color || 'black'}`)
    this._titleBackground.setAttributeNS(null, 'rx', `${size}`)
    this._titleBackground.style.opacity = '0.05'

    const titleEdge = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
    titleEdge.setAttributeNS(null, 'x', `calc(100% - 5px)`)
    titleEdge.setAttributeNS(null, 'y', `${position.y - size * 0.75}`)
    titleEdge.setAttributeNS(null, 'width', `5`)
    titleEdge.setAttributeNS(null, 'height', `${size * 1.5}`)
    titleEdge.setAttributeNS(null, 'fill', `${commit.color || 'black'}`)

    const forTitle = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject')
    forTitle.setAttributeNS(null, 'width', `calc(97% - 70px - ${textX + size}px)`)
    forTitle.setAttributeNS(null, 'height', `${size}`)
    forTitle.setAttributeNS(null, 'x', `${textX + size * 0.75}`)
    forTitle.setAttributeNS(null, 'y', `${position.y - size / 2}`)

    const titleObj = document.createElement('div')
    titleObj.className = 'graph-title-wrap'
    forTitle.append(titleObj)

    const title = document.createElement('span')
    title.style.color = `${color(commit.color).darken(0.2).hex() || 'black'}`
    title.innerHTML = commit.comment
    title.className = 'graph-title'
    titleObj.appendChild(title)

    const date = document.createElementNS('http://www.w3.org/2000/svg', 'text')
    date.innerHTML = moment(commit.date, 'YYYY-MMM').format('MMM YYYY')
    date.setAttributeNS(null, 'x', `97%`)
    date.setAttributeNS(null, 'y', `${position.y}`)
    date.setAttributeNS(null, 'dominant-baseline', `middle`)
    date.setAttributeNS(null, 'text-anchor', `end`)
    date.setAttributeNS(null, 'fill', `${color(commit.color).darken(0.2).hex() || 'black'}`)
    date.style.fontSize = '15px'

    this.titleGroup.appendChild(this._titleBackground)
    this.titleGroup.appendChild(forTitle)
    this.titleGroup.appendChild(date)
    this.titleGroup.appendChild(titleEdge)

    this.nodeGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    this._svgCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    this._svgCircle.setAttributeNS(null, 'r', `${size * 0.45}`)
    this._svgCircle.setAttributeNS(null, 'cx', `${position.x}`)
    this._svgCircle.setAttributeNS(null, 'cy', `${position.y}`)
    this._svgCircle.setAttributeNS(null, 'fill', commit.color || 'black')
    this._svgCircle.setAttribute('id', `commit_${commit.y}`)
    this._svgCircle.classList.add('commit-point')

    this._svgFiller = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    this._svgFiller.setAttributeNS(null, 'r', `${size * 0.35}`)
    this._svgFiller.setAttributeNS(null, 'cx', `${position.x}`)
    this._svgFiller.setAttributeNS(null, 'cy', `${position.y}`)
    this._svgFiller.setAttributeNS(null, 'fill', 'transparent')
    this._svgFiller.classList.add('commit-point')

    this.nodeGroup.onmouseover = () => {
      this.focused = true
    }

    this.titleGroup.onclick = () => {
      this.focused = true
    }

    // this.svgGroup.onmouseleave = () => {}
    this.nodeGroup.appendChild(this._svgCircle)
    this.nodeGroup.appendChild(this._svgFiller)

    this.focused = !!commit.focused
  }
}
