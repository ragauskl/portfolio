const Sentry = require('@sentry/node')

Sentry.init({
  dsn: 'https://0c3a9f2696cb4dd8bd377bea95f1c98d@o205237.ingest.sentry.io/5212916'
})

Sentry.setContext('environment', process.env)

Sentry.captureMessage('CI Environment')
