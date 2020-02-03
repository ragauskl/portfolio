const fastify = require('fastify')
const app = fastify()
const path = require('path')
const swaggerDocument = require('./swagger.json')

app.register(require('fastify-swagger'), {
  mode: 'static',
  specification: {
    path: path.join(__dirname, 'swagger.json')
  },
  exposeRoute: true,
  routePrefix: '/'
})

app.listen(5000, (err) => {
  if (err) throw err
  console.info('http://localhost:5000')
})
