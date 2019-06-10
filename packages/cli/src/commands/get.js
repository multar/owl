const { emoji } = require('node-emoji')

/**
 * Get emoji from given `argv` and print code
 *
 * @param {Object} argv
 * @param {string} argv.alias
 */

function get (argv) {
  const code = emoji[argv.alias]

  if (!code) {
    throw new Error(`No emoji for ${argv.alias}`)
  }

  console.log(code)
}

module.exports = get
