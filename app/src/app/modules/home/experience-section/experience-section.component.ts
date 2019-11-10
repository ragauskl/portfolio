import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss']
})
export class ExperienceSectionComponent implements OnInit {

  constructor () {
    //
  }

  ngOnInit () {
    const parent = document.getElementById('experience-graph')
    // Calculate grid rows/columns (maxX, maxY)
    // X1 = left, Y1 = down, so yq = maxH - size * q
    const grid = this.GetGridTemplate(100, 6, 2)
    parent.appendChild(grid)

  }

  private GetGridTemplate (size: number, rows: number, columns: number) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttributeNS(null, 'width', `${size * columns + 1}px`)
    svg.setAttributeNS(null, 'height', `${size * rows + 1}px`)
    svg.style.margin = 'auto'

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

    return svg
  }
}
