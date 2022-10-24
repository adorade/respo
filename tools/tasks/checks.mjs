/*!
 * Respo (v2.0.0): tools/tasks/checks.mjs
 * Copyright (c) 2019-22 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import { tree, fancyLog, green, magenta, dirs, paths, opts, banner } from '../utils/index.mjs';

export function checks (done) {
  const gulpTree = tree();
  fancyLog(`${green('Gulp Tasks:\n')}`, gulpTree.nodes);
  fancyLog(`${magenta('Directories configuration:\n')}`, dirs);
  fancyLog(`${magenta('Paths configuration:\n')}`, paths);
  fancyLog(`${magenta('Options configuration:\n')}`, opts);
  fancyLog(`${green('Banner:\n')}`, banner());
  done();
}
checks.displayName = 'check:settings';
checks.description = 'Check for settings';
