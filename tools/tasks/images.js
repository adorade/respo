/*!
 * Respo (v1.0.0): tools/tasks/images.js
 * Copyright (c) 2019 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import { src, dest, lastRun, $, bs, green, magenta, paths, opts } from '../util';

// For debugging usage:
// .pipe($.debug({ title: 'unicorn:' }))

export function cleanImages () {
  $.fancyLog(`${green('-> Clean all images')} in ${magenta(paths.images.dest)} folder`);
  return $.del(paths.images.dest);
}
cleanImages.displayName = 'clean:images';
cleanImages.description = 'Clean up images folder';

export function imagine () {
  $.fancyLog(`${green('-> Optimizing images...')}`);
  return src(paths.images.src, {
    since: lastRun(imagine)
  })
    .pipe($.imagemin([
      $.imagemin.gifsicle(opts.images.gif),
      $.imagemin.mozjpeg(opts.images.jpeg),
      $.imagemin.optipng(opts.images.png),
      $.imagemin.svgo(opts.images.svg)
    ], { verbose: true }))
    // .pipe($.size(opts.size))
    .pipe(dest(paths.images.dest))
    .pipe(bs.stream({ match: '**/*.{gif,jpg,jpeg,png,svg}' }));
}
imagine.displayName = 'optimize:img';
imagine.description = 'Optimize images for production';

export function convert () {
  $.fancyLog(`${green('-> Generating .webp formats...')}`);
  return src(paths.images.webp, {
    since: lastRun(convert)
  })
    .pipe($.webp(opts.images.webp))
    .pipe($.size(opts.size))
    .pipe(dest(paths.images.dest))
    .pipe(bs.stream({ match: '**/*.{webp}' }));
}
convert.displayName = 'convert:img';
convert.description = 'Convert images format for browser';
