/*!
 * Respo (v1.0.0): tools/util/options.js
 * Copyright (c) 2019 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import { paths } from './config';

export const opts = {
  styles: {
    failAfterError: true,
    reportOutputDir: paths.logs.gulp,
    reporters: [
      { formatter: 'string', save: 'styles.txt' }
    ],
    syntax: 'scss'
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
  uglify: {
    compress: {
      evaluate: false
    },
    mangle: {
      keep_fnames: true
    }
  },
  images: {
    gif: { interlaced: true },
    jpeg: { progressive: true },
    png: { optimizationLevel: 4 },
    svg: { plugins: [{ removeViewBox: true }] },
    webp: { // https://github.com/imagemin/imagemin-webp#options
      preset: 'default',
      quality: 60
    }
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
