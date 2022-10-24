/*!
 * Respo (v2.0.0): tools/utils/options.mjs
 * Copyright (c) 2019-22 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import { paths } from './paths.mjs';

export const opts = {
  styles: {
    failAfterError: true,
    reportOutputDir: paths.logs.gulp,
    reporters: [
      { formatter: 'string', console: true, save: 'styles.txt' }
    ]
  },
  sass: {
    outputStyle: 'expanded',
    precision: 6
  },
  autoprefixer: {
    // for browsers options see .browserslistrc
    cascade: false
  },
  csso: {
    comments: false
  },
  eslint: {
    // for more options see .eslintrc.js
  },
  babel: {
    // for more options see .babelrc.js
  },
  terser: {
    compress: {
      evaluate: false
    },
    output: {
      comments: false
    },
    keep_classnames: true,
    keep_fnames: true
  },
  images: {
    gif: { interlaced: true },
    jpeg: { progressive: true },
    png: { optimizationLevel: 4 },
    svg: { plugins: [
      {
        name: 'removeViewBox',
        active: true
      }
    ]},
    general: {
      verbose: false,
      silent: true
    },
    webp: {
      preset: 'default',
      quality: 60
    }
  },
  puglint: {
    // for more options see .pug-lintrc
  },
  pug: {
    doctype: 'html',
    pretty: true
  },
  size: {
    gzip: true,
    showFiles: true
  },
  watch: {
    delay: 2000
  }
};
