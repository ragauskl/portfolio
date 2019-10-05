const secureEnv = require('secure-env')
const fs = require('fs')
const envs = secureEnv({ secret: process.env.ENV_DECRYPTION_KEY })

const dotenv = Object.keys(envs).map(k =>
  `${k}=${envs[k]}`
).join('\n')

if (process.argv.includes('--file')) {
  fs.writeFileSync('./.env', dotenv)
} else {
  for (const k in Object.keys(envs)) {
    if (envs[k]) process.env[k] = envs[k]
  }
}

