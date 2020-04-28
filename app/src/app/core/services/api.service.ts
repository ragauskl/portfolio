import { Injectable } from '@angular/core'
import { Api, ApiRoute, RequestOptions } from '@prtf/shared'
import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { Observable, of } from 'rxjs'
import { retry, catchError, map } from 'rxjs/operators'
import { AppError } from '../utils/app-error'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  wrapper = new Api(this)

  constructor (
    private http: HttpClient
  ) {}

  async handleRequest (route: ApiRoute<any>, options: RequestOptions = {}, silent?: boolean): Promise<any> {
    options = Object.assign({
      loop: 0
    }, options)

    route = Object.assign({
      endpoint: ''
    }, route)

    const url = `${environment.api}${route.endpoint}`
    const httpOptions: any = {}

    if (options.progressCb) {
      httpOptions.reportProgress = true
      httpOptions.observe = 'events'
    }

    const mapObservable = (o: Observable<any>) => {
      if (httpOptions.reportProgress || options.cancelCb) {
        return new Promise((res, rej) => {
          const sub = o.pipe(
            retry(options.loop),
            catchError(err => of(err))
          ).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
              if (options.progressCb) options.progressCb(event)
            } else if (event.type === HttpEventType.Response) {
              res(event.body && event.body.payload ? event.body.payload : undefined)
            } else if (event instanceof HttpErrorResponse) {
              rej(event)
            }
          })
          if (options.cancelCb) options.cancelCb(() => !sub.closed && sub.unsubscribe())
        })
      } else {
        return o.pipe(
          retry(options.loop),
          map((response: any) => (response && response.data) ? response.data : response)
        ).toPromise()
      }
    }

    let result
    try {
      if (route.form && route.method === 'post') {
        result = await mapObservable(this.http.post(url, route.form, httpOptions))
      } else {
        httpOptions.body = route.body
        if (options.responseType) httpOptions.responseType = options.responseType

        result = await mapObservable(this.http.request(route.method, url, httpOptions))

      }
      return result
    } catch (error) {
      if (!(error instanceof HttpErrorResponse)) {
        console.error(error)
        throw new AppError('Client side error. Failed to send request to server.')
      } else {
        if (!silent) {
          return error.status
        } else {
          await this.handleStatus(error.status, new AppError(error.message))
        }
      }
    }
  }

  private async handleStatus (status: number, err: any) {
    switch (status) {
      case 404:
        // Redirect 404 page
        break
      case 429:
        // Too many requests page
        break
      case 0:
        const res = await this.handleRequest(this.wrapper.Root().ping(), undefined, true) as (string | number)
        if (res === 0) {
          // Redirect to server down
          throw new AppError(`Server is down.`)
        }
    }

    throw err
  }
}
