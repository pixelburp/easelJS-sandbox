'use strict';

module.exports = function () {
  return {
    server: [
      'copy:styles'
    ],
    test: [
      'copy:styles'
    ],
    mobile: [
      'copy:styles',
      'imagemin:mobile',
      'svgmin:mobile',
      'htmlmin:mobile'
    ],
    desktop: [
      'copy:styles',
      'imagemin:desktop',
      'svgmin:desktop',
      'htmlmin:desktop'
    ],
    dist: [
      'copy:styles',
      'imagemin',
      'svgmin',
      'htmlmin'
    ]
  };
};
