'use strict';

module.exports = function () {
  return {
    compass: {
      files: ['<%= baseDir %>/styles/**/*.{scss,sass}'],
      tasks: ['compass']
    },
    livereload: {
      options: {
        livereload: '<%= livereloadPort %>'
      },
      files: [
        '<%= baseDir %>/**/*.html',
        '.tmp/styles/{,*/}*.css',
        '{.tmp,<%= baseDir %>}/scripts/**/*.coffee',
        '{.tmp,<%= baseDir %>}/scripts/**/*.js',
        '<%= baseDir %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
        '<%= baseDir %>/styles/fonts/*',
        '!<%= baseDir %>/e2e-desktop.html',
        '!<%= baseDir %>/e2e-mobile.html'
      ],
      tasks: [
        //'coffee'
        //'ngtemplates:mobile',
        //'ngtemplates:desktop'
      ]
    }
  };
};