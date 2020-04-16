import { Pipe, PipeTransform } from '@angular/core'
import moment from 'moment'

@Pipe({
  name: 'moment'
})
export class MomentPipe implements PipeTransform {

  transform (value: any, format: string): any {
    try {
      const formats = format.match(/^(.*)=>(.*)$/)
      if (!formats) throw new Error(`Invalid format passed to 'moment' pipe. Only 'moment' date formats are allowed.`)
      const from = formats[1] || moment.ISO_8601
      if (!formats[2]) throw new Error(`Output format must be specified for 'moment' pipe.`)
      const to = formats[2]
      return moment(value, from).format(to)
    } catch (error) {
      return value
    }
  }
}
