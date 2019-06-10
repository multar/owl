#!/usr/bin/env node

const yargs = require('yargs')

const Commands = require('.')

const { argv } = yargs
  .command('get <alias>', 'get the emoji by alias')
  .help()

function run (argv) {
  const [ cmd ] = argv._
  const command = Commands[cmd]

  if (!command) {
    return yargs.showHelp()
  }

  try {
    const res = command(argv)
    console.log(res)
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

run(argv)
