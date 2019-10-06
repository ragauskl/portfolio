import { ContactForm } from './models/exports'
export * from './models/exports'

export type AcceptedResponseType = 'text' | 'blob' | 'arraybuffer'
export type ProgressCb = (event: {total?: number, loaded: number}) => Promise<void> | void
export type CancelCb = (cancel: () => void) => void
export interface RequestOptions {
  responseType?: AcceptedResponseType
  loop?: number
  progressCb?: ProgressCb
  cancelCb?: CancelCb
}

interface ApiHandler {
  handleRequest: (route: ApiRoute<any>, options?: RequestOptions) => Promise<any>
  [key: string]: any
}

class ParentRoute {
  endpoint: string
  handler: ApiHandler
  constructor (handler: ApiHandler, endpoint: string = '') {
    this.endpoint = endpoint
    this.handler = handler
  }
}

export class ApiRoute<T> {
  endpoint: string
  body?: any
  form?: FormData
  method: 'get' | 'post' | 'delete' | 'put' | 'report'
  customHeaders?: {[key: string]: any}

  constructor (protected handler: ApiHandler, method: 'get' | 'post' | 'delete' | 'put' | 'report', endpoint: string = '', body?: any) {
    this.method = method
    this.body = body
    this.endpoint = endpoint
  }

  run = (options?: RequestOptions): Promise<T> => this.handler.handleRequest(this, options)
}

export class Api {
  constructor (private handler: ApiHandler) {}

  Root = () => new class Class extends ParentRoute {
    constructor (handler: ApiHandler) {
      super(handler, `/`)
    }

    ping = (): ApiRoute<string> => new class extends ApiRoute<any> {
      constructor (handler: ApiHandler, basePath: string) {
        super(handler, 'get', basePath)
      }

      run = (options: RequestOptions = {}): Promise < string > => {
        options.responseType = 'text'
        return this.handler.handleRequest(this, options)
      }
    }(this.handler, this.endpoint)
  }(this.handler)

  Emails = () => new class extends ParentRoute {
    constructor (handler: ApiHandler) {
      super(handler, `/emails`)
    }

    add = (body: ContactForm): ApiRoute<undefined> => new class extends ApiRoute<any> {
      constructor (handler: ApiHandler, basePath: string) {
        super(handler, 'post', basePath, body)
      }
    }(this.handler, this.endpoint)
  }(this.handler)

}
