import { bold, greenBright, redBright, blueBright, white } from 'colorette'

/**
 * * Log utility function
 * @param logData: object or string to log
 * @param status: color of the log: { 'success' | 'error' | 'info' }
 */
const Log = (logData?: string, status?: 'success' | 'error' | 'info') => {
  switch (status) {
    case 'success':
      console.log(greenBright(`✅ ${logData}`))
      break
    case 'error':
      console.log(redBright(`✖ ${logData}`))
      break
    case 'info':
      console.log(blueBright(`💫 ${logData}`))
      break

    default:
      console.log(white(logData))
      break
  }
}

export default Log
