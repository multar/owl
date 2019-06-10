import test from 'ava'

import execa from 'execa'

// constants

const CLI = `${__dirname}/../cli.js`

const RE = /^([\w\-._]+) (.*)\n([\s\S]+)$/

// macros

const displayHelp = async (t, argv) => {
  const res = await execa(CLI, argv)
  t.regex(res.stdout, RE)
}

// tests

test('with --help flag', displayHelp, ['--help'])
test('with no args', displayHelp)
