/*!
 * Respo (v1.0.0): tools/tasks/styles.js
 * Copyright (c) 2019 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import { src, dest, lastRun, $, bs, green, magenta, paths, opts, banner } from '../util';

// For debugging usage:
// .pipe($.debug({ title: 'unicorn:' }))

export function cleanCss () {
  $.fancyLog(`${green('-> Clean all styles')} in ${magenta(paths.styles.dest)} folder`);
  return $.del(paths.styles.dest);
}
cleanCss.displayName = 'clean:css';
cleanCss.description = 'Clean up styles folders';

export function lintScss () {
  $.fancyLog(`${green('-> Linting SCSS files...')}`);
  return src(paths.styles.src, {
    since: lastRun(lintScss)
  })
    .pipe($.gStylelint(opts.styles));
}
lintScss.displayName = 'lint:scss';
lintScss.description = 'Lint SCSS files';

export function compile () {
  $.fancyLog(`${green('-> Compiling SCSS...')}`);
  return src(paths.styles.src, {
    sourcemaps: true
  })
    .pipe($.sass(opts.sass).on('error', $.sass.logError))
    .pipe($.autoprefixer(opts.autoprefixer))
    .pipe($.header(banner()))
    .pipe($.size(opts.size))
    .pipe(dest(paths.styles.dest, { sourcemaps: './maps' }))
    .pipe(bs.stream({ match: '**/*.css' }));
}
compile.displayName = 'compile:scss';
compile.description = 'Compile SCSS files';

export function minify () {
  $.fancyLog(`${green('-> Minify CSS...')}`);
  return src(paths.styles.filter)
    .pipe($.csso(opts.csso))
    .pipe($.rename({ extname: '.min.css' }))
    .pipe($.header(banner()))
    .pipe($.size(opts.size))
    .pipe(dest(paths.styles.dest))
    .pipe(bs.stream({ match: '**/*.min.css' }));
}
minify.displayName = 'min:css';
minify.description = 'Minify CSS files';
