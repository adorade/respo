/*!
 * Respo (v1.0.0): tools/tasks/checks.js
 * Copyright (c) 2019 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import { tree, $, green, magenta, dirs, paths, opts, banner } from '../util';

export function checks (done) {
  const gulpTree = tree();
  $.fancyLog(`${green('Gulp Tasks:\n')}`, gulpTree.nodes);
  $.fancyLog(`${magenta('Directories configuration:\n')}`, dirs);
  $.fancyLog(`${magenta('Paths configuration:\n')}`, paths);
  $.fancyLog(`${magenta('Options configuration:\n')}`, opts);
  $.fancyLog(`${green('Banner:\n')}`, banner());
  done();
}
checks.displayName = 'check:settings';
checks.description = 'Check for settings';
