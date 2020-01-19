/*!
 * Respo (v1.0.0): tools/tasks/scripts.js
 * Copyright (c) 2019 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import {
  src, dest, lastRun, $, bs, fs, green, magenta, paths, opts, banner
} from '../util';

// For debugging usage:
// .pipe($.debug({ title: 'unicorn:' }))

export function cleanJs () {
  $.fancyLog(`${green('-> Clean all scripts')} in ${magenta(paths.scripts.dest)} folder`);
  return $.del(paths.scripts.dest);
}
cleanJs.displayName = 'clean:js';
cleanJs.description = 'Clean up scripts folders';

export function lintEs () {
  $.fancyLog(`${green('-> Linting ES files...')}`);

  const outputDir = paths.logs.gulp;
  fs.mkdirSync(`${outputDir}`, { recursive: true });
  const output = fs.createWriteStream( `${outputDir}/scripts.txt` );

  return src(paths.scripts.src, {
    since: lastRun(lintEs)
  })
    .pipe($.gEslint())
    .pipe($.gEslint.format())
    .pipe($.gEslint.format('stylish', output))
    .pipe($.gEslint.failAfterError());
}
lintEs.displayName = 'lint:es';
lintEs.description = 'Lint ES files';

export function transpile () {
  $.fancyLog(`${green('-> Transpiling ES via Babel...')}`);
  return src(paths.scripts.src, {
    sourcemaps: true
  })
    .pipe($.babel(opts.babel))
    .pipe($.header(banner()))
    .pipe($.size(opts.size))
    .pipe(dest(paths.scripts.dest, { sourcemaps: './' }))
    .pipe(bs.stream({ match: '**/*.js' }));
}
transpile.displayName = 'transpile:es';
transpile.description = 'Transpile ES via Babel';

export function uglify () {
  $.fancyLog(`${green('-> Minify JS...')}`);
  return src(paths.scripts.filter, {
    // since: lastRun(uglify)
  })
    .pipe($.uglify(opts.uglify))
    .pipe($.rename({ extname: '.min.js' }))
    .pipe($.header(banner()))
    .pipe($.size(opts.size))
    .pipe(dest(paths.scripts.dest))
    .pipe(bs.stream({ match: '**/*.min.js' }));
}
uglify.displayName = 'min:js';
uglify.description = 'Minify JS files';
