'use strict';

module.exports = function () {
  return {
    options: {
      jshintrc: '.jshintrc'
    },
    all: [
      'Gruntfile.js',
      '<%= baseDir %>/scripts/{,*/}*.js'
    ]
  };
};
