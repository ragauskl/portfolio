import secureEnv from 'secure-env'

export enum ENV {
  ENV_DECRYPTION_KEY = 'ENV_DECRYPTION_KEY',
  NODE_ENV = 'NODE_ENV',
  NO_REPLY_EMAIL = 'NO_REPLY_EMAIL',
  NO_REPLY_PASSWORD = 'NO_REPLY_PASSWORD'
}

export function validateVariables () {
  if (!process.env[ENV.NODE_ENV]) process.env[ENV.NODE_ENV] = 'dev'

  const missing: string[] = []
  for (const k in ENV) {
    if (!process.env[k]) missing.push(k)
  }

  if (missing.length) throw new Error(`Environment variables missing: ${missing.join(', ')}.`)
}

export function decryptVariables () {
  const vars = secureEnv({ secret: process.env[ENV.ENV_DECRYPTION_KEY] }) as any
  if (!vars) throw new Error('Failed to decrypt environment variables.')
  for (const k in ENV) {
    if (vars[k]) process.env[k] = vars[k]
  }
}
