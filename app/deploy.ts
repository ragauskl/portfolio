const ghPages = require('gh-pages')

ghPages.publish('dist', (err) => {
  if (err) throw err
  else console.log('✔ Webpage deployed')
})
