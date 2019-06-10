#!/usr/bin/env node

const yargs = require('yargs')

const Commands = require('.')

const { argv } = yargs
  .command('get <alias>', 'get the emoji by alias')
  .help()

const [ cmd ] = argv._
const command = Commands[cmd]

if (command) {
  command(argv)
} else {
  // show help if no args
  yargs.showHelp()
}
