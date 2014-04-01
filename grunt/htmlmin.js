'use strict';

module.exports = function () {
  return {
    mobile: {
      options: {
      },
      files: [
        {
          expand: true,
          cwd: '<%= baseDir %>',
          src: ['{\d}*.html', 'mobile.html', 'views/common/*.html', 'views/mobile/*.html'],
          dest: '<%= mobileDestDir %>'
        }
      ]
    },
    desktop: {
      options: {
      },
      files: [
        {
          expand: true,
          cwd: '<%= baseDir %>',
          src: ['{\d}*.html', 'desktop.html', 'views/common/*.html', 'views/desktop/*.html'],
          dest: '<%= desktopDestDir %>'
        }
      ]
    },
    dist: {
      options: {
      },
      files: [
        {
          expand: true,
          cwd: '<%= baseDir %>',
          src: ['*.html', 'views/*.html'],
          dest: '<%= destDir %>'
        }
      ]
    }
  };
};
