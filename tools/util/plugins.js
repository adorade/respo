/*!
 * Respo (v1.0.0): tools/util/plugins.js
 * Copyright (c) 2019 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

// Importing specific gulp API functions lets us write them as series() instead of gulp.series()
export { src, dest, series, parallel, lastRun, watch, tree } from 'gulp';

// Load all plugins in "devDependencies" into the variable $
export const $ = require('gulp-load-plugins')({
  pattern: ['*'],
  rename: {
    'gulp-stylelint': 'gStylelint',
    'gulp-eslint': 'gEslint',
    'gulp-pug-linter': 'pugLinter'
  }
});

// Colors for fancy log
export { bgBlue, bgRed, green, magenta, red } from 'ansi-colors';

// Load others modules
export const bs = require('browser-sync').create();
export const fs = require('fs');
