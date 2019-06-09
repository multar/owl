#!/usr/bin/env node

const yargs = require('yargs')
const emoji = require('node-emoji')

const { argv } = yargs
  .command('get <alias>', 'get the emoji by alias')
  .help()

const code = emoji.get(argv.alias)

console.log(code)
