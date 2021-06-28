const ghPages = require('gh-pages')

async function publish () {
  try {
    await new Promise<void>((res, rej) => {
      ghPages.publish('dist', (err: Error) => {
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
