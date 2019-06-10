#!/usr/bin/env node

const yargs = require('yargs')

const Commands = require('.')

const { argv } = yargs
  .command('get <alias>', 'get the emoji by alias')
  .help()

const [ cmd ] = argv._
const command = Commands[cmd]

if (command) {
  try {
    const res = command(argv)
    console.log(res)
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
} else {
  // show help if no args
  yargs.showHelp()
}
