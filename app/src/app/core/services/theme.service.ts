import { Injectable } from '@angular/core'

type Theme = 'light' | 'dark'

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _theme: Theme = 'light'

  constructor () {
    this._theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
  }

  get isDark () {
    return this._theme === 'dark'
  }

  switchTheme () {
    if (this._theme === 'light') {
      this._theme = 'dark'
      document.body.className = 'dark-theme'
    } else {
      this._theme = 'light'
      document.body.className = ''
    }
    localStorage.setItem('theme', this._theme)
  }
}
