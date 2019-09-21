import { Component } from '@angular/core'
import { ThemeService } from '@core/services/theme.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  get showMenu () {
    return !window.location.href.endsWith('browser-not-supported') &&
      !window.location.href.includes('error')
  }

  constructor (private themeService: ThemeService) {}
}
