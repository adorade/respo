/*!
 * Respo (v2.0.0): tools/tasks/clean.mjs
 * Copyright (c) 2019-22 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import { fancyLog, green, magenta, dirs, del } from '../utils/index.mjs';

export async function clean () {
  fancyLog(`${green('-> Clean all files')} in ${magenta(dirs.dest)} folder`);
  await del(dirs.dest);
}
clean.displayName = 'clean:all';
clean.description = 'Clean up dist folders';
