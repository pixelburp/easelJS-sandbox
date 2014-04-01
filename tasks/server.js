'use strict';

module.exports = function (grunt) {
  grunt.registerTask('server', function () {
    var d = grunt.config.data;

    grunt.task.run([
      'clean:server',
      'compass:server',
      //'coffee',
      'concurrent:server',
      //'autoprefixer',
      'connect:livereload',
      'open',
      'watch'
    ]);
  });
};