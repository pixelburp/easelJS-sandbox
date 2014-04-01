'use strict';

module.exports = function () {
  return {
    options: {
      sassDir: '<%= baseDir %>/styles',
      cssDir: '.tmp/styles',
      imagesDir: '<%= baseDir %>/images',
      javascriptsDir: '<%= baseDir %>/scripts',
      fontsDir: '<%= baseDir %>/styles/fonts',
      relativeAssets: true
    },
    dist: {},
    server: {
      options: {
        debugInfo: true
      }
    }
  };
};

