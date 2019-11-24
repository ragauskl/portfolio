import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import moment from 'moment'

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss']
})
export class ExperienceSectionComponent implements OnInit {
  readonly drawGrid = false
  hovered: any

  constructor (
    private http: HttpClient
  ) {}

  ngOnInit () {
    this.http.get('assets/history.json').subscribe((json: History) => {
      const columns = json.branches.length
      const rows = json.commits.length * 2 - 1

      const parent = document.getElementById('experience-graph')
      const cellSize = 50
      const height = rows * cellSize
      const getX = (x) => cellSize * (x - 0.5) + 10
      const getY = (y) => height - (cellSize * (y - 0.5)) + 5
      // Calculate grid rows/columns (maxX, maxY)
      // X1 = left, Y1 = down, so yq = maxH - size * q
      const grid = this.GetGridTemplate(cellSize, rows + 0.2, columns)
      parent.appendChild(grid)

      const orderedCommits = json.commits.sort(
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
        for (const commit of orderedCommits) {
          y += 2
          commit.y = y

          const branch: BranchElement = json.branches.find(x => x.branch === commit.branch)
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

      const renderCommits = () => {
        for (const commit of orderedCommits) {
          const group = document.createElementNS('http://www.w3.org/2000/svg', 'g')
          const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
          circle.setAttributeNS(null, 'r', `${cellSize * 0.45}`)
          circle.setAttributeNS(null, 'cx', `${getX(commit.x)}`)
          circle.setAttributeNS(null, 'cy', `${getY(commit.y)}`)
          circle.setAttributeNS(null, 'fill', commit.color || 'black')
          circle.setAttribute('id', `commit_${commit.y}`)
          circle.classList.add('commit-point')

          const filler = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
          filler.setAttributeNS(null, 'r', `${cellSize * 0.35}`)
          filler.setAttributeNS(null, 'cx', `${getX(commit.x)}`)
          filler.setAttributeNS(null, 'cy', `${getY(commit.y)}`)
          filler.setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.95)')
          filler.classList.add('commit-point')

          group.onmouseover = () => {
            this.hovered = commit
            circle.setAttributeNS(null, 'r', `${cellSize * 0.45 * 1.2}`)
            filler.setAttributeNS(null, 'r', `${cellSize * 0.35 * 1.2}`)
          }

          group.onmouseleave = () => {
            circle.setAttributeNS(null, 'r', `${cellSize * 0.45}`)
            filler.setAttributeNS(null, 'r', `${cellSize * 0.35}`)
          }

          group.appendChild(circle)
          group.appendChild(filler)

          grid.appendChild(group)
        }
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
        for (const el of json.branches) {
          const commits = orderedCommits.filter(x => x.branch === el.branch)
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
            const origin = json.branches.find(x => x.branch === el.origin)
            if (origin) {
              const forkCommit = orderedCommits.slice(0, orderedCommits.indexOf(commits[0]))
                .reverse()
                .find(x => x.branch === origin.branch)

              if (forkCommit) {
                const curve = drawCurve(origin.x, startY - 2, startX, startY)
                functions[el.x].push(() => appendLine(curve))
              }

              const lastCommit = commits[commits.length - 1]
              if (lastCommit.closed) {
                const curve = drawCurve(lastX, lastY, origin.x, lastY + 2)
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
      renderBranches()
      renderCommits()

    })
  }

  private GetGridTemplate (size: number, rows: number, columns: number) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttributeNS(null, 'width', `${size * columns + 1}px`)
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
}
