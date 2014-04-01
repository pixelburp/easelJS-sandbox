'use strict';

module.exports = function (grunt) {
  return {
    mobile: {
      options: {
        force: true
      },
      files: [
        {
          dot: true,
          src: [
            '.tmp',
            '<%= mobileDestDir %>/*',
            '!<%= mobileDestDir %>/.git*',
            '!<%= mobileDestDir %>/422.html',
            '!<%= mobileDestDir %>/500.html'
          ]
        }
      ]
    },
    desktop: {
      options: {
        force: true
      },
      files: [
        {
          dot: true,
          src: [
            '.tmp',
            '<%= desktopDestDir %>/*',
            '!<%= desktopDestDir %>/.git*',
            '!<%= desktopDestDir %>/422.html',
            '!<%= desktopDestDir %>/500.html'
          ]
        }
      ]
    },
    dist: {
      options: {
        force: true
      },
      files: [
        {
          dot: true,
          src: [
            '.tmp',
            '<%= destDir %>/*',
            '!<%= destDir %>/.git*',
            '!<%= destDir %>/422.html',
            '!<%= destDir %>/500.html'
          ]
        }
      ]
    },
    server: '.tmp'
  };
};
