/*!
 * Respo (v1.0.0): tools/tasks/index.mjs
 * Copyright (c) 2019 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

export { checks } from './checks.mjs';                                  // Checks
export { clean } from './clean.mjs';                                    // Clean
export { cleanCss, lintScss, compile, minifyCss } from './styles.mjs';  // Styles
export { cleanJs, lintEs, transpile, minifyJs } from './scripts.mjs';   // Scripts
export { cleanImages, imagine, convert } from './images.mjs';           // Images
export { cleanStatics, favicons, statica } from './statics.mjs';        // Statics
export { cleanPages, lintPages, pagile } from './pages.mjs';            // Pages
export { serve } from './serve.mjs';                                    // Serve and Watch
