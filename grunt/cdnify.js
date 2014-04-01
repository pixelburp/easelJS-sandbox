'use strict';

module.exports = function () {
  return {
    mobile: {
      html: ['<%= mobileDestDir %>/*.html']
    },
    desktop: {
      html: ['<%= desktopDestDir %>/*.html']
    },
    dist: {
      html: ['<%= destDir %>/*.html']
    }
  };
};

