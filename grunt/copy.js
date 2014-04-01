'use strict';

module.exports = function () {
  return {
    mobile: {
      files: [
        {
          expand: true,
          dot: true,
          cwd: '<%= baseDir %>',
          dest: '<%= mobileDestDir %>',
          src: [ '*.{ico,png,txt}',
            'images/mobile/{,*/}*.{gif,webp}',
            'styles/fonts/*'
          ]
        },
        {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= mobileDestDir %>/images/mobile',
          src: ['generated/*']
        }
      ]
    },
    desktop: {
      files: [
        {
          expand: true,
          dot: true,
          cwd: '<%= baseDir %>',
          dest: '<%= desktopDestDir %>',
          src: [ '*.{ico,png,txt}',
            'images/desktop/{,*/}*.{gif,webp}',
            'styles/fonts/*'
          ]
        },
        {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= desktopDestDir %>/images/desktop',
          src: ['generated/*']
        }
      ]
    },
    dist: {
      files: [
        {
          expand: true,
          dot: true,
          cwd: '<%= baseDir %>',
          dest: '<%= destDir %>',
          src: [ '*.{ico,png,txt}',
            'images/{,*/}*.{gif,webp}',
            'styles/fonts/*'
          ]
        },
        {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= destDir %>/images',
          src: ['generated/*']
        }
      ]
    },
    styles: {
      expand: true,
      cwd: '<%= baseDir %>/styles',
      dest: '.tmp/styles/',
      src: '{,*/}*.css'
    }
  };
};
