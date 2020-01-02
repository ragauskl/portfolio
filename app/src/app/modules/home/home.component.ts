import { Component } from '@angular/core'
import { ThemeService } from '@core/services/theme.service'
import { NavBarService } from '@core/services/navbar.service'
import { Section } from '@core/model/section'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  section = Section

  constructor (
    public theme: ThemeService,
    public navBar: NavBarService
  ) {}
}
