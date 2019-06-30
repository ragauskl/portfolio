import { Component } from '@angular/core'
import { ThemeService } from '@core/services/theme.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor (public theme: ThemeService) {}
}
