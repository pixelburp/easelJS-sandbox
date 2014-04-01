'use strict';

module.exports = function (grunt) {

  grunt.registerTask('buildTestFiles', function() {
    var testScripts, tmpMobileFile, tmpDesktopFile;
    var data = grunt.config.data;

    testScripts = '<script src="test/mock/e2eHelper.js"></script>' +
      '<script src="bower_components/jasmine/lib/jasmine-core/jasmine.js">' +
      '</script><script src="bower_components/jasmine-jquery/lib/jasmine-jquery.js"></script></body>';

    tmpMobileFile =
      grunt.file.read(data.baseDir + '/mobile.html')
        .replace('lotteriesApp','lotteriesAppDev')
        .replace('</body>', testScripts);

    tmpDesktopFile =
      grunt.file.read(data.baseDir + '/desktop.html')
        .replace(/lotteriesApp/gi,'lotteriesAppDev')
        .replace('</body>', testScripts);

    grunt.file.write(data.baseDir + '/e2e-mobile.html', tmpMobileFile);
    grunt.file.write(data.baseDir + '/e2e-desktop.html', tmpDesktopFile);
  });

  grunt.registerTask('deleteTestFile', function() {
    var data = grunt.config.data;
    grunt.file.delete(data.baseDir + '/e2e-mobile.html');
    grunt.file.delete(data.baseDir + '/e2e-desktop.html');
  });

  grunt.registerTask('e2e', [ 'buildTestFiles', 'ngconstant:test', 'karma:e2e', 'deleteTestFile']);

  grunt.registerTask('cucumber', [ 'buildTestFile', 'cucumberjs', 'deleteTestFile']);

  grunt.registerTask('unit', [ 'ngconstant:test', 'karma:unit']);
};