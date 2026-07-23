import assert from 'node:assert/strict'
import test from 'node:test'

import { createIndexNowPayload } from './submit-indexnow.mjs'

test('creates the established IndexNow payload without submitting it', () => {
  assert.deepEqual(createIndexNowPayload(['/services/'], 'test-key'), {
    host: 'www.svendsenphotography.com',
    key: 'test-key',
    keyLocation:
      'https://www.svendsenphotography.com/2a15b0098704420d84c253f881032323.txt',
    urlList: ['https://www.svendsenphotography.com/services/'],
  })
})

test('rejects URLs outside the production origin', () => {
  assert.throws(
    () => createIndexNowPayload(['https://example.com/services/'], 'test-key'),
    /URL must belong to https:\/\/www\.svendsenphotography\.com/,
  )
})
