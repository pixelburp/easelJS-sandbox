'use strict';

module.exports = function(grunt) {
  grunt.registerMultiTask('renameAndTidy', 'Rename and tidy after the build', function() {
    var data = this.data;
    grunt.file.write(data.destDir + '/index.html', grunt.file.read(data.destDir + '/'+ data.filename));
    grunt.file.delete(data.destDir + '/' + data.filename, { force: true });
  });
};

