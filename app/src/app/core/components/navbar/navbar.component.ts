import { Component } from '@angular/core'
import { NavBarService } from '@core/services/navbar.service'
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'app-nav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent {
  get title (): string {
    return this._navbarService.currentTitle
  }

  constructor (
    private _navbarService: NavBarService
  ) {}
}
