import { greenBright } from 'colorette'
import { initTemplate } from '../template'
import Log from '../utils/log'

export async function startCreate() {
  try {
    console.log(greenBright('Welcome to Sweet React Native!'))
    console.log('')

    const question = [
      {
        type: 'input',
        name: 'project_name',
        message: 'What is the name of your project?',
        default: 'sweetrn',
      },
      {
        type: 'input',
        name: 'package_name',
        message: 'Would you like to set a custom package name?',
        default: 'com.sweetrn',
      },
    ]

    const inquirer = require('inquirer')

    const { project_name, package_name } = await inquirer.prompt(question)

    const [isValidProjectName, isValidPackageName] = [
      /^[A-Za-z.\s_-]+$/.test(project_name),
      /^[a-z.\s_-]+$/.test(package_name),
    ]

    if (!isValidProjectName) {
      console.log('')
      Log('Invalid project name', 'error')
      Log('Project names must be lowercase, without special characters')
      console.log('')
      process.exit(0)
    }

    if (!isValidPackageName) {
      console.log('')
      Log('Invalid package name', 'error')
      Log('Package names must be lowercase')
      console.log('')
      process.exit(0)
    }

    initTemplate(project_name, package_name)
  } catch (e) {
    Log(e, 'error')
  }
}
