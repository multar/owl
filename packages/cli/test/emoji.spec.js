import test from 'ava'

import Emoji from '..'

test('get', t => {
  const { get } = Emoji

  t.is(typeof get, 'function', 'type')
  t.is(get('coffee'), '☕', 'behavior')
})
