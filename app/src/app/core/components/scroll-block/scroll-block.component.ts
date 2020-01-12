import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-scroll-block',
  templateUrl: './scroll-block.component.html',
  styleUrls: ['./scroll-block.component.scss']
})
export class ScrollBlockComponent {
  @Input() contentClass?: string
}
