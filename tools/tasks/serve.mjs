/*!
 * Respo (v2.0.1): tools/tasks/serve.mjs
 * Copyright (c) 2019-22 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import {
  series, watch, fancyLog, bgBlue, bgRed, green, magenta, red, paths, opts, dirs, bs
} from '../utils/index.mjs';
import {
  lintScss, compile, minifyCss, lintEs, transpile, minifyJs,
  imagine, convert, favicons, statica, lintPages, pagile
} from './index.mjs';

export function serve () {
  bs.init({
    server: {
      baseDir: dirs.dest
    },
    port: 6979,
    logPrefix: 'Respo',
    ui: false
  });

  function watchEvent (path, event, task) {
    fancyLog(
      `File ${magenta(path)} was ${green(event)} running ${red(task)}`
    );
  }

  const watchers = [
    {
      name: 'Styles',
      paths: paths.styles.src,
      tasks: [lintScss, compile, minifyCss]
    },
    {
      name: 'Scripts',
      paths: paths.scripts.src,
      tasks: [lintEs, transpile, minifyJs]
    },
    {
      name: 'Images',
      paths: paths.images.src,
      tasks: [imagine, convert]
    },
    {
      name: 'Favicons',
      paths: paths.statics.src.icons,
      tasks: [favicons]
    },
    {
      name: 'Statics',
      paths: paths.statics.src.conf,
      tasks: [statica]
    },
    {
      name: 'Pages',
      paths: paths.views.all,
      tasks: [lintPages, pagile]
    }
  ];

  for (let watcher of watchers) {
    fancyLog(bgRed(`Watching ${watcher.name}`));

    for (let p of [watcher.paths]) {
      fancyLog(bgBlue('Source: '), magenta(p));
    }

    let taskNames = [];

    for (let value of Object.values(watcher.tasks)) {
      let taskName = value.displayName;
      taskNames.push(taskName);
    }

    watch(
      watcher.paths, opts.watch, series(watcher.tasks)
    )
      .on('all', (event, path) => {
        watchEvent(path, event, taskNames);
      });
  }
}
serve.displayName = 'serve:watch';
serve.description = 'Serve and Watch';
