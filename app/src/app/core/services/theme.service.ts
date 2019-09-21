import { Injectable } from '@angular/core'

type Theme = 'light' | 'dark'

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _theme: Theme = 'light'

  constructor () {
    this._theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
    this.updateTheme()

    ;(window as any).theme = () => this.switchTheme()
  }

  get isDark () {
    return this._theme === 'dark'
  }

  switchTheme () {
    this._theme = this._theme === 'light' ? 'dark' : 'light'
    this.updateTheme()
  }

  updateTheme () {
    document.body.className = this._theme === 'dark' ? 'dark-theme' : ''
    localStorage.setItem('theme', this._theme)
  }
}
