const tsConfig = require('./tsconfig.json')
const tsConfigPaths = require('tsconfig-paths')

const cleanup = tsConfigPaths.register({
  baseUrl: `dist`,
  paths: tsConfig.compilerOptions.paths
})
