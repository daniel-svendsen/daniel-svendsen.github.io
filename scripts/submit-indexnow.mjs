import fs from 'node:fs/promises'
import path from 'node:path'

const siteUrl = new URL('https://www.svendsenphotography.com')
const keyFileName = '2a15b0098704420d84c253f881032323.txt'
const keyFilePath = path.join(process.cwd(), 'public', keyFileName)
const key = (await fs.readFile(keyFilePath, 'utf8')).trim()
const urlArguments = process.argv.slice(2)

if (urlArguments.length === 0) {
  console.error(
    'Usage: npm run indexnow -- /changed-page/ /another-changed-page/',
  )
  process.exitCode = 1
} else {
  const urlList = urlArguments.map((value) => {
    const url = new URL(value, siteUrl)

    if (url.origin !== siteUrl.origin) {
      throw new Error(`URL must belong to ${siteUrl.origin}: ${value}`)
    }

    return url.href
  })

  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      host: siteUrl.hostname,
      key,
      keyLocation: new URL(keyFileName, siteUrl).href,
      urlList,
    }),
  })

  if (response.status !== 200 && response.status !== 202) {
    const responseBody = await response.text()
    throw new Error(
      `IndexNow submission failed (${response.status}): ${responseBody || response.statusText}`,
    )
  }

  console.log(
    `IndexNow accepted ${urlList.length} URL${urlList.length === 1 ? '' : 's'} (${response.status}).`,
  )
}
