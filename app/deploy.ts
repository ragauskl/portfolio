const ghPages = require('gh-pages')

ghPages.publish('dist', (err) => {
  if (err) console.error('Deploy failure:', err)
  else console.log('✔ Webpage deployed')
})
