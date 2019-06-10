import test from 'ava'

import execa from 'execa'

// constants

const CLI = `${__dirname}/../cli.js`

// helpers

const execFor = alias => {
  const argv = ['get', alias]
  return execa(CLI, argv)
}

// macros

const getCodeOk = async (t, alias, code) => {
  const isOk = res => {
    t.is(res.stdout, code)
  }

  await execFor(alias)
    .then(isOk)
}

const getCodeErr = async (t, alias) => {
  const isErr = (res) => {
    t.not(res.code, 0)

    t.regex(res.stderr, /No emoji for (.*)+/)
  }

  await t.throwsAsync(() => execFor(alias))
    .then(isErr)
}

// tests

test('coffee', getCodeOk, 'coffee', '☕')
test('vodka', getCodeErr, 'vodka')
