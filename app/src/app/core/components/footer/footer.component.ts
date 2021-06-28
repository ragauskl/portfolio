import { Component } from '@angular/core'
import moment from 'moment'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year: number

  constructor () {
    this.year = moment().year()
  }

}
