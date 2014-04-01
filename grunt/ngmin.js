'use strict';

module.exports = function () {
  return {
    mobile: {
      files: [
        {
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: 'scripts.js',
          dest: '<%= mobileDestDir %>/scripts'
        }
      ]
    },
    desktop: {
      files: [
        {
          expand: true,
          cwd: '<%= desktopDestDir %>/scripts',
          src: '*.js',
          dest: '<%= desktopDestDir %>/scripts'
        }
      ]
    },
    dist: {
      files: [
        {
          expand: true,
          cwd: '<%= destDir %>/scripts',
          src: '*.js',
          dest: '<%= destDir %>/scripts'
        }
      ]
    }
  };
};
