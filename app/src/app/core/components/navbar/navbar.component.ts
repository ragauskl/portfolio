import { Component } from '@angular/core'
import { NavBarService } from '@core/services/navbar.service'
import { Section } from '@core/model/section'

@Component({
  selector: 'app-nav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent {
  section = Section
  constructor (
    public navBar: NavBarService
  ) {}
}
