// rollup.config.js

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import babel from '@rollup/plugin-babel';
import dts from 'rollup-plugin-dts';

const inputFile = 'src/gsapanimation.js';

const sharedPlugins = [
    resolve(),
    commonjs(),
    babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        presets: [['@babel/preset-env', { targets: '> 0.25%, not dead' }]],
    }),
];

export default [
    // 1. gsapanimation.js (default build, ESM, unminified)
    {
        input: inputFile,
        output: {
            file: 'dist/gsapanimation.js',
            format: 'esm',
            sourcemap: true,
        },
        external: ['gsap'],
        plugins: sharedPlugins,
    },

    // 2. ESM
    {
        input: inputFile,
        output: {
            file: 'dist/gsapanimation.esm.js',
            format: 'esm',
            sourcemap: true,
        },
        external: ['gsap'],
        plugins: sharedPlugins,
    },

    // 3. UMD
    {
        input: inputFile,
        output: {
            file: 'dist/gsapanimation.umd.js',
            format: 'umd',
            name: 'gsapanimation',
            sourcemap: true,
            globals: {
                gsap: 'gsap',
            },
        },
        external: ['gsap'],
        plugins: sharedPlugins,
    },

    // 4. Minified UMD
    {
        input: inputFile,
        output: {
            file: 'dist/gsapanimation.umd.min.js',
            format: 'umd',
            name: 'gsapanimation',
            sourcemap: true,
            globals: {
                gsap: 'gsap',
            },
        },
        external: ['gsap'],
        plugins: [...sharedPlugins, terser()],
    },
];
