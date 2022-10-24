/*!
 * Respo (v2.0.0): tools/tasks/statics.mjs
 * Copyright (c) 2019-22 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import {
  src, dest, lastRun, fancyLog, green, magenta, paths, opts,
  bs, del, size /*, debug */
} from '../utils/index.mjs';

// For debugging usage:
// .pipe(debug({ title: 'unicorn:' }))

export async function cleanStatics () {
  fancyLog(`${green('-> Clean up')} ${magenta(paths.statics.dest)} folder`);
  fancyLog(`${green('-> Clean up')} all ${magenta('conf')} files`);
  await del([paths.statics.dest, paths.statics.del]);
}
cleanStatics.displayName = 'clean:statics';
cleanStatics.description = 'Clean up statics folders';

export function favicons () {
  fancyLog(`${green('-> Copying favicons files...')}`);
  return src(paths.statics.src.icons, {
    since: lastRun(favicons)
  })
    .pipe(size(opts.size))
    .pipe(dest(paths.statics.dest.icons))
    .pipe(bs.stream({ match: '**/*.{ico,png,svg}' }));
}
favicons.displayName = 'favicons';
favicons.description = 'Copy favicons files';

export function statica () {
  fancyLog(`${green('-> Copying statics files...')}`);
  return src(paths.statics.src.conf, {
    since: lastRun(statica)
  })
    .pipe(size(opts.size))
    .pipe(dest(paths.statics.dest.conf))
    .pipe(bs.stream({ match: '**/*.{json,txt,webmanifest,xml}' }));
}
statica.displayName = 'statica';
statica.description = 'Copy statics files';
