import { Component, Input, ViewChild, ElementRef } from '@angular/core'
import { NavBarService } from '@core/services/navbar.service'
import { Section } from '@core/model/section'
import { ViewService } from '@core/services/view.service'

@Component({
  selector: 'app-nav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent {
  @ViewChild('menuBackdrop', { static: true }) menuBackdrop: ElementRef<HTMLElement>
  section = Section
  private _menuOpen = false
  get menuOpen () {
    return this._menuOpen && this.viewService.mobile
  }
  set menuOpen (val: boolean) {
    this._menuOpen = val
  }

  constructor (
    public navBar: NavBarService,
    public viewService: ViewService
  ) {}
}
