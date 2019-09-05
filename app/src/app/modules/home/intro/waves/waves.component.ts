import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core'

const NS = 'http://www.w3.org/2000/svg'
@Component({
  selector: 'app-waves',
  templateUrl: './waves.component.html',
  styleUrls: ['./waves.component.scss']
})
export class WavesComponent implements AfterViewInit {
  @ViewChild('wavesContainer', { static: false }) wavesContainer!: ElementRef<HTMLElement>
  ngAfterViewInit () {
    // this.GenerateWaves()
  }

  private GenerateWaves () {
    const el = this.wavesContainer.nativeElement
    // Original width: 120, height: 28
    const { width, height } = el.getBoundingClientRect()

    const svgEl = document.createElementNS(NS, 'svg')
    svgEl.setAttributeNS(NS, 'viewBox', `0 0 ${width} ${height}`)

    const map = (value, oMax, nMax) => (value * 100 / oMax) * nMax / 100

    const h10 = map(10, 28, height)
    const h15 = map(15, 28, height)

    const w30 = map(30, 120, width)
    const w60 = map(60, 120, width)
    const w90 = map(90, 120, width)
    const w120 = map(120, 120, width)
    const w150 = map(150, 120, width)
    const w180 = map(180, 120, width)
    const w210 = map(210, 120, width)
    const w240 = map(240, 120, width)

    const path = `\
      M 0,${h10} \
      C ${w30},${h10} ${w30},${h15} ${w60},${h15} ${w90},${h15} ${w90},${h10} ${w120},${h10} ${w150},${h10} ${w150},${h15} ${w180},${h15} ${w210},${h15} ${w210},${h10} ${w240},${h10} \
      v ${height} h ${-2 * width} z\
    `
    console.log('path:', path)

    const defsEl = document.createElementNS(NS, 'defs')
    svgEl.appendChild(defsEl)
    const pathEl = document.createElementNS(NS, 'path')
    defsEl.appendChild(pathEl)
    pathEl.setAttributeNS(NS, 'd', path)

    const path2 = pathEl.cloneNode(true) as SVGPathElement
    const path3 = pathEl.cloneNode(true) as SVGPathElement

    path3.setAttributeNS(NS, 'id', 'wave3')
    path3.setAttributeNS(NS, 'class', 'wave')
    path3.setAttributeNS(NS, 'x', '0')
    path3.setAttributeNS(NS, 'y', '-20')
    svgEl.appendChild(path3)

    path2.setAttributeNS(NS, 'id', 'wave2')
    path2.setAttributeNS(NS, 'class', 'wave')
    path2.setAttributeNS(NS, 'x', '0')
    path2.setAttributeNS(NS, 'y', '-10')
    svgEl.appendChild(path2)

    pathEl.setAttributeNS(NS, 'id', 'wave1')
    pathEl.setAttributeNS(NS, 'class', 'wave')
    pathEl.setAttributeNS(NS, 'x', '0')
    pathEl.setAttributeNS(NS, 'y', '10')
    svgEl.appendChild(pathEl)

    // pathEl.setAttributeNS(NS, 'id', 'wave')

    // const use3 = document.createElementNS(NS, 'use')
    // svgEl.appendChild(use3)
    // use3.setAttributeNS(NS, 'id', 'wave3')
    // use3.setAttributeNS(NS, 'class', 'wave')
    // use3.setAttributeNS(NS, 'xlink:href', '#wave')
    // use3.setAttributeNS(NS, 'x', '0')
    // use3.setAttributeNS(NS, 'y', '-20')

    // const use2 = document.createElementNS(NS, 'use')
    // svgEl.appendChild(use2)
    // use2.setAttributeNS(NS, 'id', 'wave2')
    // use2.setAttributeNS(NS, 'class', 'wave')
    // use2.setAttributeNS(NS, 'xlink:href', '#wave')
    // use2.setAttributeNS(NS, 'x', '0')
    // use2.setAttributeNS(NS, 'y', '-10')

    // const use1 = document.createElementNS(NS, 'use')
    // svgEl.appendChild(use1)
    // use1.setAttributeNS(NS, 'id', 'wave1')
    // use1.setAttributeNS(NS, 'class', 'wave')
    // use1.setAttributeNS(NS, 'xlink:href', '#wave')
    // use1.setAttributeNS(NS, 'x', '0')
    // use1.setAttributeNS(NS, 'y', '10')

    if (el.firstChild) el.replaceChild(svgEl, el.firstChild)
    else el.appendChild(svgEl)
  }
}
