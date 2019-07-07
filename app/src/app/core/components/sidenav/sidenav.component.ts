import { Component, HostListener, ElementRef } from '@angular/core'
import { SidenavService } from '@core/services/sidenav.service'
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('menuSlide', [
      state('min-open', style({
        height: 'calc(100% - 64px)'
      })),
      state('min-closed', style({
        height: '0'
      })),
      state('max-open', style({
        width: 'calc(100% - 64px)'
      })),
      state('max-closed', style({
        width: '0'
      })),
      transition('max-closed <=> max-open, min-closed <=> min-open', [animate('0.5s')])
    ])
  ]
})
export class SidenavComponent {
  @HostListener('window:resize')
  onresize () {
    this.calculateType()
  }
  menuOpen = false
  minimized = false

  get title (): string {
    return this._sidenavService.currentTitle
  }

  constructor (
    private _el: ElementRef<HTMLElement>,
    private _sidenavService: SidenavService
  ) {
    this.calculateType()
  }

  calculateType () {
    const { clientHeight, clientWidth } = this._el.nativeElement
    this.minimized = clientHeight < clientWidth
  }

  toggleMenu () {
    this.menuOpen = !this.menuOpen
  }
}
