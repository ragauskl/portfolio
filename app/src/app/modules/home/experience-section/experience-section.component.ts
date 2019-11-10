import { Component, OnInit } from '@angular/core'
import * as GitgraphJs from '@gitgraph/js'
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

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttributeNS(null, 'width', '301px')
    svg.setAttributeNS(null, 'height', '601px')
    svg.style.margin = 'auto'

    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs')
    const pattern = document.createElementNS('http://www.w3.org/2000/svg', 'pattern')
    pattern.setAttributeNS(null, 'id', 'grid')
    pattern.setAttributeNS(null, 'width', '100')
    pattern.setAttributeNS(null, 'height', '100')
    pattern.setAttributeNS(null, 'patternUnits', 'userSpaceOnUse')

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    path.setAttributeNS(null, 'd', 'M 100 0 L 0 0 0 100')
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
    parent.appendChild(svg)
  }

}
