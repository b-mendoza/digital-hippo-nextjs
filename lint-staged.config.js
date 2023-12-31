// @ts-check

import path from 'node:path';

/**
 * @param {string[]} filenames
 */
const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

const lintStagedConfig = {
  '*': 'prettier --ignore-unknown --write',
  '*.{js,ts,tsx}': [buildEslintCommand],
  '*.ts?(x)': () => 'tsc -p ./tsconfig.json --incremental false',
};

export default lintStagedConfig;
