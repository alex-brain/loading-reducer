import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from "rollup-plugin-uglify";
import babel from 'rollup-plugin-babel';
import multiEntry from 'rollup-plugin-multi-entry';
import filesize from 'rollup-plugin-filesize';
import progress from 'rollup-plugin-progress';
import pkg from './package.json';

let pluginOptions = [
  multiEntry(),
  resolve({
    jsnext: true,
    browser: true
  }),
  babel({
    exclude: 'node_modules/**',
  }),
  uglify(),
];

export default [
  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: 'src/index.js',
    external: ['ms'],
    // format: 'umd',
    output: [
      {
        name: 'main.js',
        file: 'lib/main.js',
        format: 'cjs',
      },
    ],
  }
];
