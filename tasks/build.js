'use strict';

module.exports = function(grunt) {
  grunt.registerTask('buildMobile', [
    'clean:mobile',
    'compass:dist',
    'ngtemplates:mobile',
    'ngconstant',
    'useminPrepare:mobile',
    'concurrent:mobile',
    'autoprefixer:mobile',
    'concat',
    'copy:mobile',
    'cdnify:mobile',
    'ngmin:mobile',
    'cssmin',
    'uglify',
    'rev:mobile',
    'usemin',
    'imagemin:mobile',
    'renameAndTidy:mobile',
    'ngconstant:dev',
    'appcache'
  ]);

  grunt.registerTask('buildDesktop', [
    'clean:desktop',
    'compass:dist',
    'ngtemplates:desktop',
    'ngconstant',
    'useminPrepare:desktop',
    'concurrent:desktop',
    'autoprefixer:desktop',
    'concat',
    'copy:desktop',
    'cdnify:desktop',
    'ngmin:desktop',
    'cssmin',
    'uglify',
    'rev:desktop',
    'usemin',
    'imagemin:desktop',
    'renameAndTidy:desktop',
    'ngconstant:dev'
  ]);

  grunt.registerTask('build', [
    'buildDesktop',
    'buildMobile'
  ]);

};

