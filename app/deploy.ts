const ghPages = require('gh-pages')
console.log('Deployment script initialised.')

async function publish () {
  try {
    await new Promise((res, rej) => {
      ghPages.publish('dist', (err: Error, ...args) => {
        console.log(`Callback:`)
        console.log(args)
        if (err) rej(err)
        else res()
      })
    })

    console.log('✔ Webpage deployed')
  } catch (error) {
    console.error(`Webpage deployment failed:`)
    throw error
  }
}

// tslint:disable-next-line
publish()
