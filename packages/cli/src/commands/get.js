const emoji = require('node-emoji')

/**
 * Get emoji from given `argv` and print code
 *
 * @param {Object} argv
 * @param {string} argv.alias
 */

function get (argv) {
  const code = emoji.get(argv.alias)
  console.log(code)
}

module.exports = get
