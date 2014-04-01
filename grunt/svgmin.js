'use strict';

module.exports = function() {
  return {
    svgmin: {
    },
    mobile: {
      files: [
        {
        expand: true,
        cwd: '<%= baseDir %>/images/mobile',
        src: '{,*/}*.svg',
        dest: '<%= mobileDestDir %>/images/mobile'
      }
      ]
    },
    desktop: {
      files: [
        {
        expand: true,
        cwd: '<%= baseDir %>/images/desktop',
        src: '{,*/}*.svg',
        dest: '<%= desktopDestDir %>/images/desktop'
      }
      ]
    },
    dist: {
      files: [
        {
        expand: true,
        cwd: '<%= baseDir %>/images',
        src: '{,*/}*.svg',
        dest: '<%= destDir %>/images'
      }
      ]
    }
  };
};
