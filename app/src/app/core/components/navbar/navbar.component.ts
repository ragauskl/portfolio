import { Component } from '@angular/core'
import { NavBarService } from '@core/services/navbar.service'
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'app-nav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('menuSlide', [
      state('open', style({
        height: 'calc(100% - 64px)'
      })),
      state('closed', style({
        height: '0'
      })),
      transition('closed <=> open', [animate('0.5s')])
    ])
  ]
})
export class NavBarComponent {
  menuOpen = false

  get title (): string {
    return this._navbarService.currentTitle
  }

  constructor (
    private _navbarService: NavBarService
  ) {}

  toggleMenu () {
    this.menuOpen = !this.menuOpen
  }
}
