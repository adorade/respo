/*!
 * Respo (v1.0.0): tools/tasks/index.js
 * Copyright (c) 2019 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

export { checks } from './checks';                               // Checks
export { clean } from './clean';                                 // Clean
export { cleanCss, lintScss, compile, minify } from './styles';  // Styles
export { cleanJs, lintEs, transpile, uglify } from './scripts';  // Scripts
export { cleanImages, imagine, convert } from './images';        // Images
export { cleanStatics, favicons, statica } from './statics';     // Statics
export { cleanPages, lintPages, pagile } from './pages';         // Pages
export { serve } from './serve';                                 // Serve and Watch
