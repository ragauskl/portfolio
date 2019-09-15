import { Component, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core'

const NS = 'http://www.w3.org/2000/svg'
@Component({
  selector: 'app-waves',
  templateUrl: './waves.component.html',
  styleUrls: ['./waves.component.scss']
})
export class WavesComponent implements AfterViewInit {
  @HostListener('window:resize')
  onResize () {
    this.GenerateWaves()
  }

  @ViewChild('wavesContainer', { static: false }) wavesContainer!: ElementRef<HTMLElement>
  ngAfterViewInit () {
    this.GenerateWaves()
  }

  private GenerateWaves () {
    const el = this.wavesContainer.nativeElement
    let { width, height } = el.getBoundingClientRect()

    const svgEl = document.createElementNS(NS, 'svg')
    svgEl.setAttributeNS(null, 'viewBox', `0 0 ${width} ${height}`)
    svgEl.style.width = `${width}px`
    svgEl.style.height = `${height}px`

    const h = width < 299 ? 10 :
    width < 499 ? 20 :
      width < 599 ? 30 :
        width < 959 ? 40 :
          width < 1279 ? 50 :
            width < 1919 ? 50 : 50

    width = width * 2

    const w100 = width * (12.5 / 100)
    const w200 = width * (25 / 100)
    const w300 = width * (37.5 / 100)
    const w400 = width * (50 / 100)
    const w500 = width * (62.5 / 100)
    const w600 = width * (75 / 100)
    const w700 = width * (87.5 / 100)

    const rawPath = `` +
     `M 0 0 ` +
      `C ${w100} 0 ${w100} ${h} ${w200} ${h} ` +
      `C ${w300} ${h} ${w300} 0 ${w400} 0 ` +
      `C ${w500} 0 ${w500} ${h} ${w600} ${h} ` +
      `C ${w700} ${h} ${w700} 0 ${width} 0 ` +
      `L ${width} ${height} ` +
      `L 0 ${height} ` +
      `Z`

    const pathEl = document.createElementNS(NS, 'path')
    pathEl.setAttributeNS(null, 'd', rawPath)
    pathEl.setAttributeNS(null, 'id', 'wave')

    const defEl = document.createElementNS(NS, 'defs')
    defEl.appendChild(pathEl)
    svgEl.appendChild(defEl)

    const use1 = document.createElementNS(NS, 'use')
    use1.setAttributeNS(null, 'id', 'wave1')
    use1.setAttributeNS(null, 'class', 'wave')
    use1.setAttributeNS(null, 'x', '0')
    use1.setAttributeNS(null, 'y', '0')
    use1.setAttributeNS(null, 'href', '#wave')

    const use2 = use1.cloneNode() as any
    use2.setAttributeNS(null, 'id', 'wave2')
    use2.setAttributeNS(null, 'y', '-2')

    const use3 = use1.cloneNode() as any
    use3.setAttributeNS(null, 'id', 'wave3')
    use3.setAttributeNS(null, 'y', '-4')

    svgEl.appendChild(use3)
    svgEl.appendChild(use2)
    svgEl.appendChild(use1)

    if (el.firstChild) el.replaceChild(svgEl, el.firstChild)
    else el.appendChild(svgEl)
  }
}
