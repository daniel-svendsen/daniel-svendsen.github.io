import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

import { SITE_URL } from '../src/config/siteOrigin.js'

const siteUrl = new URL(SITE_URL)
const keyFileName = '2a15b0098704420d84c253f881032323.txt'
const keyFilePath = path.join(process.cwd(), 'public', keyFileName)

export function createIndexNowPayload(urlArguments, key) {
  const urlList = urlArguments.map((value) => {
    const url = new URL(value, siteUrl)

    if (url.origin !== siteUrl.origin) {
      throw new Error(`URL must belong to ${siteUrl.origin}: ${value}`)
    }

    return url.href
  })

  return {
    host: siteUrl.hostname,
    key,
    keyLocation: new URL(keyFileName, siteUrl).href,
    urlList,
  }
}

async function main() {
  const key = (await fs.readFile(keyFilePath, 'utf8')).trim()
  const urlArguments = process.argv.slice(2)

  if (urlArguments.length === 0) {
    console.error(
      'Usage: npm run indexnow -- /changed-page/ /another-changed-page/',
    )
    process.exitCode = 1
    return
  }

  const payload = createIndexNowPayload(urlArguments, key)
  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(payload),
  })

  if (response.status !== 200 && response.status !== 202) {
    const responseBody = await response.text()
    throw new Error(
      `IndexNow submission failed (${response.status}): ${responseBody || response.statusText}`,
    )
  }

  console.log(
    `IndexNow accepted ${payload.urlList.length} URL${payload.urlList.length === 1 ? '' : 's'} (${response.status}).`,
  )
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  await main()
}
