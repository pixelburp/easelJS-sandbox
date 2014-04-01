'use strict';

module.exports = function () {
  return {
    options: {
/*
      sourceMap: true,
      sourceMapDir: '<%= baseDir %>/scripts/maps/'
*/
    },
    compile: {
      files: {
        '<%= baseDir %>/scripts/coffee.js': '<%= baseDir %>/scripts/**/*.coffee', // 1:1 compile
      }
    },
  };
};

