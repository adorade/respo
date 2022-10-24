/*!
 * Respo (v1.0.0): tools/index.mjs
 * Copyright (c) 2019 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

export {
  checks, clean,                                        // Checks and Clean
  cleanCss, lintScss, compile, minifyCss,               // Styles
  cleanJs, lintEs, transpile, minifyJs,                 // Scripts
  cleanImages, imagine, convert,                        // Images
  cleanStatics, favicons, statica,                      // Statics
  cleanPages, lintPages, pagile,                        // Pages
  serve                                                 // Serve and Watch
} from './tasks/index.mjs';
