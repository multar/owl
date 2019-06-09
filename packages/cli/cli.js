#!/usr/bin/env node

const yargs = require('yargs')

const { get } = require('./src/commands')

const { argv } = yargs
  .command('get <alias>', 'get the emoji by alias')
  .help()

// exec
get(argv)
