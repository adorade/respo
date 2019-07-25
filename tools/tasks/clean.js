/*!
 * Respo (v1.0.0): tools/tasks/clean.js
 * Copyright (c) 2019 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import { $, green, magenta, dirs } from '../util';

export function clean () {
  $.fancyLog(`${green('-> Clean all files')} in ${magenta(dirs.dest)} folder`);
  return $.del(dirs.dest);
}
clean.displayName = 'clean:all';
clean.description = 'Clean up dist folders';
