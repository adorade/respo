/*!
 * Respo (v1.0.0): tools/utils/index.mjs
 * Copyright (c) 2019 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

// Load plugins
export {
  src, dest, series, parallel, lastRun, watch, tree,
  fancyLog, bgBlue, bgRed, green, magenta, red,
  fs, bs, cached, debug, del, header, rename, size
} from './plugins.mjs';

// Configuration
export { dirs, paths } from './paths.mjs';

// Options
export { opts } from './options.mjs';

// Template for banner to add to file headers
export { banner } from './banner.mjs';
