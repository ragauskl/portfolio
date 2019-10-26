export class AppError extends Error {
  name: string
  context?: any

  constructor (public message: string, public silent = true) {
    super()
    Error.captureStackTrace(this, this.constructor)
    this.name = this.constructor.name
  }

  setContext = (data: any) => {
    this.context = data
  }
}

export function handleError (e: Error | AppError | any, ctx?: {action?: string, description?: string, form?: any}) {
  if (!(e instanceof AppError) || !e.silent) console.error(e)
}
