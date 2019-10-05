import onHeaders = require('on-headers')
import onFinished = require('on-finished')
import moment from 'moment'
import { IncomingMessage, ServerResponse } from 'http'

interface LoggerOptions {
  skipOnReq?: (req?: IncomingMessage, res?: ServerResponse) => boolean
  skipOnRes?: (req?: IncomingMessage, res?: ServerResponse) => boolean
  // output on request instead of response
  immediate?: boolean
  colorize?: boolean
  dateFormat?: string
}

function recordStartTime () {
  this._startAt = process.hrtime()
}

function headersSent (res: IncomingMessage | any) {
  return typeof res.headersSent !== 'boolean'
    ? Boolean(res._header)
    : res.headersSent
}

function color (status: number) {
  const color = status >= 500 ? 31 // red
    : status >= 400 ? 33 // yellow
      : status >= 300 ? 36 // cyan
        : status >= 200 ? 32 // green
          : 0 // no color
  if (color === 0) return status
  else return `\x1b[${color}m${status}\x1b[0m`
}

const tokens = {
  ip: function (req: IncomingMessage | any) {
    return req.ip ||
      req._remoteAddress ||
      (req.connection && req.connection.remoteAddress) ||
      undefined
  },
  url: function (req: IncomingMessage | any) {
    return req.originalUrl || req.url
  },
  method: function (req: IncomingMessage) {
    return req.method
  },
  'response-time': function (req: IncomingMessage | any, res: ServerResponse | any, digits?: number) {
    if (!req._startAt || !res._startAt) {
      // missing request and/or response start time
      return
    }

    // calculate diff
    const ms = (res._startAt[0] - req._startAt[0]) * 1e3 +
      (res._startAt[1] - req._startAt[1]) * 1e-6

    // return truncated value
    return ms.toFixed(digits === undefined ? 3 : digits)
  },
  date: function (format?: string) {
    if (format === 'iso') return moment().toISOString()
    else return moment().format(format || 'DD MMM YY HH:mm:ss')
  },
  status: function (res: IncomingMessage) {
    return headersSent(res)
      ? res.statusCode
      : undefined
  },
  referrer: function (req: IncomingMessage) {
    return req.headers['referer'] || req.headers['referrer']
  },
  'http-version': function (req: any) { // ??
    return req.httpVersionMajor + '.' + req.httpVersionMinor
  },
  'user-agent': function (req: IncomingMessage) {
    return req.headers['user-agent']
  },
  req: function (req: IncomingMessage, field: string) {
    // get header
    const header = req.headers[field.toLowerCase()]

    return Array.isArray(header)
      ? `[${header.join(', ')}]`
      : header
  },
  res: function (res: IncomingMessage | any, field: string) {
    if (!headersSent(res)) {
      return undefined
    }

    // get header
    const header = res.getHeader(field)

    return Array.isArray(header)
      ? `[${header.join(', ')}]`
      : header
  }
}

export function logger (options: LoggerOptions) {

  return function (req: IncomingMessage | any, res: ServerResponse | any, next: Function) { // ??

    if (options.skipOnReq && options.skipOnReq(req, res)) {
      next()
      return
    }
    // request data
    req._startAt = undefined
    req._remoteAddress = tokens.ip(req)

    // response data
    res._startAt = undefined

    // record request start
    recordStartTime.call(req)
    const start = moment()

    function logRequest () {
      if (options.skipOnRes && options.skipOnRes(req, res)) return

      // get the status code if response written
      const status = tokens.status(res)

      const details = {
        ip: tokens.ip(req),
        url: tokens.url(req),
        forwarded: tokens.req(req, 'x-forwarded-for'),
        date: tokens.date(options.dateFormat),
        method: tokens.method(req),
        status,
        contentLength: tokens.res(res, 'content-length'),
        userAgent: tokens['user-agent'](req),
        responseTime: tokens['response-time'](req, res),
        respTime2: moment().diff(start, 'milliseconds')
      }

      console.info([
        details.method,
        details.url,
        options.colorize ? color(details.status) : details.status,
        `${details.responseTime || `~${details.respTime2}`}ms - ${details.contentLength}`,
        '\n\t',
        details.ip,
        details.forwarded ? `forwarded=${details.forwarded}` : undefined
      ].filter(x => x !== undefined).join(' '))
    }

    if (options.immediate) {
      // immediate log
      logRequest()
    } else {
      // record response start
      onHeaders(res, recordStartTime)

      // log when response finished
      onFinished(res, logRequest)
    }

    next()
  }
}
