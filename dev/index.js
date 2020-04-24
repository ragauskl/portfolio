const Sentry = require('@sentry/node')

Sentry.init({ dsn: 'https://4db2f94b1bea4316a76e061424d28053@o205237.ingest.sentry.io/5212941' })


;(async () => {
  await new Promise(res => setTimeout(res, 1000))
  Sentry.setContext('environment', process.env)
  Sentry.captureMessage('CI Environment', Sentry.Severity.Info)
})()

