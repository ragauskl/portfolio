import { Component, Input } from '@angular/core'
import { Link } from '@core/utils/content'

@Component({
  selector: 'app-link-list[links]',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss']
})
export class LinkListComponent {
  @Input() links: (
    Link & {
      img: string
    }
  )[] = []

  ngOnInit () {
    for (const l of this.links) {
      l.img = l.icon === 'git' ? 'assets/icons/misc/github.svg' :
        l.icon === 'youtube' ? 'assets/icons/misc/youtube.svg' :
          l.icon === 'web' ? 'assets/icons/misc/web.svg' :
            l.icon
    }
  }
}
