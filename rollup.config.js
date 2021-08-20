import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'
import pkg from './package.json'

export default {
  input: './src/index.ts',
  output: [
    { file: pkg.browser, format: 'umd', name: 'ahelper' },
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' },
  ],
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
}
