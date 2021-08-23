import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'
import pkg from './package.json'

export default {
  input: './src/index.ts',
  output: [
    { file: pkg.browser, format: 'umd', name: 'ahelper', sourcemap: true },
    { file: pkg.main, format: 'cjs', sourcemap: true },
    { file: pkg.module, format: 'es', sourcemap: true },
  ],
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    babel({
      extensions: ['.js', '.ts'],
      exclude: 'node_modules/**',
    }),
  ],
}
