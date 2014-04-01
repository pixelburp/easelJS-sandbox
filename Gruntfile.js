'use strict';

var openBrowser = {
      open: true,
      port: 9999
    },
    livereloadPort = 35730,
    singleRun = process.env['SINGLERUN'] ? true : false,
    autoWatch = process.env['AUTOWATCH'] ? false : true;

module.exports = function (grunt) {
  grunt.loadTasks('tasks');
  require('load-grunt-config')( grunt,
    {
      init: true,
      config: {
        baseDir: 'app',
        mobileDestDir: 'dist/mobile',
        desktopDestDir: 'dist/desktop',
        openBrowser: openBrowser,
        livereloadPort: livereloadPort,
        singleRun: singleRun,
        autoWatch: autoWatch
      }
    }
  );
};

