/*!
 * Respo (v1.0.0): gulpfile.esm.js
 * Copyright (c) 2019 Adorade (https://res.adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import { series } from './tools/util';
import {
  cleanCss, lintScss, compile, minifyCss,
  cleanJs, lintEs, transpile, minifyJs,
  cleanImages, imagine, convert,
  cleanStatics, favicons, statica,
  cleanPages, lintPages, pagile,
  checks, clean, serve
} from './tools';

/**
 * Check dirs, paths, options and settings
 * -------------------------------------------------------------------------- */
export { checks };

/**
 * Clean - clean all files from 'dist' folder
 * -------------------------------------------------------------------------- */
export { clean };

/**
 * Styles - processes style files
 * -------------------------------------------------------------------------- */
const styles = series(lintScss, compile, minifyCss);
export const buildStyles = series(cleanCss, styles);
buildStyles.displayName = 'build:styles';
buildStyles.description = 'Build only styles files';

/**
 * Scripts - processes script files
 * -------------------------------------------------------------------------- */
const scripts = series(lintEs, transpile, minifyJs);
export const buildScripts = series(cleanJs, scripts);
buildScripts.displayName = 'build:scripts';
buildScripts.description = 'Build only scripts files';

/**
 * Images - processes image files
 * -------------------------------------------------------------------------- */
const images = series(imagine, convert);
export const buildImages = series(cleanImages, images);
buildImages.displayName = 'build:images';
buildImages.description = 'Build only images files';

/**
 * Statics - processes static files
 * -------------------------------------------------------------------------- */
const statics = series(favicons, statica);
export const buildStatics = series(cleanStatics, statics);
buildStatics.displayName = 'build:statics';
buildStatics.description = 'Build statics files';

/**
 * Templates - processes templates files
 * -------------------------------------------------------------------------- */
const pages = series(lintPages, pagile);
export const buildPages = series(cleanPages, pages);
buildPages.displayName = 'build:pages';
buildPages.description = 'Build only html files';

/**
 * Watch and Serve - watch files for changes and reload
 * Starts a BrowerSync instance
 * Watch files for changes
 * -------------------------------------------------------------------------- */
export { serve };

/**
 * Define `build` task - Specify if tasks run in series or parallel
 * Builds the documentation and framework files
 * -------------------------------------------------------------------------- */
export const build = series(
  clean, styles, scripts, images, statics, pages
);
build.description = 'Build task for production';

/**
 * Define `dev` task - build, edit source, reload
 * Runs all of the above tasks and then waits for files to change
 * -------------------------------------------------------------------------- */
const dev = series(build, serve);
dev.description = 'Development task with serve';

/**
 * Define default task that can be called by just running `gulp` from cli
 * -------------------------------------------------------------------------- */
export default dev;
