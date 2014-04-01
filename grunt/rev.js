'use strict';

module.exports = function () {
  return {
    mobile: {
      files: {
        src: [ '<%= mobileDestDir %>/scripts/{,*/}*.js', '<%= mobileDestDir %>/styles/{,*/}*.css']
      }
    },
    desktop: {
      files: {
        src: [ '<%= desktopDestDir %>/scripts/{,*/}*.js', '<%= desktopDestDir %>/styles/{,*/}*.css']
      }
    },
    dist: {
      files: {
        src: [ '<%= destDir %>/scripts/{,*/}*.js', '<%= destDir %>/styles/{,*/}*.css']
      }
    }
  };
};
