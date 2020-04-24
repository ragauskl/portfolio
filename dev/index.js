const Sentry = require('@sentry/node')

Sentry.init({
  dsn: process.env.SENTRY
})

Sentry.setContext('environment', process.env)

Sentry.captureMessage('CI Environment')
