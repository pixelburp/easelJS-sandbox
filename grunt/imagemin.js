'use strict';

module.exports = function () {
  return {
    mobile: {
      files: [
        {
          expand: true,
          cwd: '<%= baseDir %>/images/mobile',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%= mobileDestDir %>/images/mobile'
        }
      ]
    },
    desktop: {
      files: [
        {
          expand: true,
          cwd: '<%= baseDir %>/images/desktop',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%= desktopDestDir %>/images/desktop'
        }
      ]
    },
    dist: {
      files: [
        {
          expand: true,
          cwd: '<%= baseDir %>/images',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%= destDir %>/images'
        }
      ]
    }
  };
};
