const Sentry = require('@sentry/node')

Sentry.init({ dsn: process.env.SENTRY })


;(async () => {
  await new Promise(res => setTimeout(res, 1000))
  Sentry.setContext('environment', {
    branches: Object.keys(process.env).filter(k => k.toLowerCase().includes('branch')).reduce((o, k) => {
      o[k] = process.env[k]
      return o
    }, {}),
    env: process.env
  })
  Sentry.captureMessage('CI Environment', Sentry.Severity.Info)
})()

