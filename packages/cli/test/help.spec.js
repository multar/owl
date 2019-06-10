import test from 'ava'

import execa from 'execa'

// constants

const CLI = `${__dirname}/../cli.js`

const RE = /^([\w\-._]+) (.*)\n([\s\S]+)$/

// tests

test('with `help` command', async t => {
  const res = await execa(CLI, ['--help'])
  t.regex(res.stdout, RE)
})

test('with --help flag', async t => {
  const res = await execa(CLI, ['--help'])
  t.regex(res.stdout, RE)
})

test('with no args', async t => {
  const res = await execa(CLI)
  t.regex(res.stderr, RE)
})
