/*!
 * Respo (v2.0.1): tools/utils/plugins.mjs
 * Copyright (c) 2019-22 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

// Importing specific gulp API functions lets us write them as series() instead of gulp.series()
import gulp from 'gulp';
export const { src, dest, series, parallel, lastRun, watch, tree } = gulp;

// Fancy log with colors
import log from 'fancy-log';
export const fancyLog = log;
import colors from 'ansi-colors';
export const { bgBlue, bgRed, cyan, green, magenta, red } = colors;

// Load global modules
import * as fs from 'fs';
import browserSync from 'browser-sync';
const bs = browserSync.create();
import cached from 'gulp-cached';
import debug from 'gulp-debug';
import { deleteAsync as del } from 'del';
import header from 'gulp-header';
import rename from 'gulp-rename';
import size from 'gulp-size';

export { fs, bs, cached, debug, del, header, rename, size };
