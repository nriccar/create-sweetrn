import { bold, greenBright, white } from 'colorette'

import { cleanup, nodeVersionWarning } from './utils/utils'

import { startCreate } from './create'

/**
 * * Init
 */
async function cli() {
  const args = process.argv.slice(2)

  const help = args.indexOf('--help') >= 0 || args.indexOf('-h') >= 0
  if (help) {
    showHelp()
    process.exit(0)
  }

  const version = args.indexOf('--version') >= 0 || args.indexOf('-v') >= 0
  if (version) {
    showVersion()
    process.exit(0)
  }

  nodeVersionWarning()

  await startCreate()

  cleanup()
}

/**
 * * Show Help
 */
function showHelp() {
  console.log('Welcome to', greenBright(bold('create-sweetrn')))
  console.log('Usage:', greenBright('create-sweetrn [options]'))
  console.log('')
  console.log(white('Options:'))
  console.log(white('  [--help, -h] Displays usage information'))
  console.log(white('  [--version, -v] Shows the current version of the CLI2'))
  console.log(white(''))
}

/**
 * * Show Version
 */
function showVersion() {
  const { version } = require('../package.json')
  console.log(greenBright(bold(`v${version}`)))
}

/**
 * * Run CLI
 */
;(async () => {
  try {
    await cli()
  } catch (e) {
    console.error(e)
  }
})()
