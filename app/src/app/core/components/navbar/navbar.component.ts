import { Component, Input, ViewChild, ElementRef } from '@angular/core'
import { NavBarService } from '@core/services/navbar.service'
import { Section } from '@core/model/section'
import { ViewService } from '@core/services/view.service'
import { trigger, transition, stagger, style, query } from '@angular/animations'
import { ProjectsService } from '@core/services/projects.service'

@Component({
  selector: 'app-nav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger(
      'render', [
        transition('* => *', [
          query(':enter', [
            style({
              opacity: 0
            }),
            stagger(200, [
              style({
                opacity: 1
              })
            ])
          ])
        ])
      ]
    )
  ]
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

  get projectsSection () {
    return this.projectsService.hasProjectsPage ? 'projects' : 'featured'
  }

  constructor (
    public navBar: NavBarService,
    public viewService: ViewService,
    public projectsService: ProjectsService
  ) {}
}
