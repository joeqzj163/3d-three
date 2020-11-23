import babel from "rollup-plugin-babel";
import {eslint} from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: "dist/js/super-three-3d.js",
    format: "umd",
    name: 'Joe3d',
    sourceMap: true, //为了方便调试编译后的文件
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
    eslint({
      exclude: [
        // throwOnError: false,
        // throwOnWarning: false,
        // include:['./src/**'],
        // exclude: ['./node_modules/**']
      ]
    }),
  ],
};