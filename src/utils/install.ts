import { Spinner } from 'cli-spinner'
import { bold } from 'colorette'

import { npm, npx } from './utils'

export const installDependencies = async (
  folder: string,
  package_name: string,
  step: string,
) => {
  const loading = new Spinner(bold(`[${step}] Installing dependencies...`))
  loading.setSpinnerString(18)
  loading.start()

  await npm('ci', folder)
  await npx(`react-native-rename ${folder} -b ${package_name}`, folder)
  await npx(`pod-install`, folder)

  loading.stop(true)
}
