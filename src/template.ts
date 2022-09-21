import { bold } from 'colorette'
import { Spinner } from 'cli-spinner'

import { rimraf } from './utils/utils'
import { downloadTemplateMain } from './utils/download'
import { unZipBuffer } from './utils/unzip'
import { installDependencies } from './utils/install'
import Log from './utils/log'

export const initTemplate = async (
  project_name: string,
  package_name: string,
) => {
  await downloadTemplate(project_name)
  await installDependencies(project_name, package_name, '2/2')
  info(project_name)
}

const info = (project_name: string) => {
  console.log('')
  Log(
    `The template has been cloned in the newly created folder ${project_name}`,
    'success',
  )

  Log(
    '   Dive deeper with the "Getting Started" guide of Sweet React Native in https://github.com/nriccar/sweet-rn',
  )
  console.log('')
}

const downloadTemplate = async (project_name: string) => {
  const loading = new Spinner(
    bold('[1/2] Downloading Sweet React Native template...'),
  )
  loading.setSpinnerString(18)
  loading.start()

  // 1. Remove dir
  rimraf(project_name)

  // 2. Download starter
  const buffer = await downloadTemplateMain()
  await unZipBuffer(buffer, project_name)

  loading.stop(true)
}
