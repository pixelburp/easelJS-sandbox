'use strict';

module.exports = function (grunt) {
  return {
    options: {
      port: '<%= openBrowser.port %>',
      hostname: 'localhost'
    },
    livereload: {
      options: {
        middleware: function (connect) {
          return [
            require('connect-livereload')({ port: grunt.config.data.livereloadPort }),
            connect.static('.tmp'),
            connect.static(grunt.config.data.baseDir)
          ];
        }
      }
    },
    test: {
      options: {
        middleware: function (connect) {
          return [
            connect.static('.tmp'),
            connect.static('test')
          ];
        }
      }
    },
    dist: {
      options: {
        middleware: function (connect) {
          return [
            connect.static(grunt.config.data.destDir)
          ];
        }
      }
    }
  };
};
