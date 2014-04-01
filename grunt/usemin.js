'use strict';

module.exports = function () {
  return {
    html: ['dist/{,*/}*.html'],
    css: ['dist/styles/{,*/}*.css'],
    options: {
      dirs: ['dist']
    }
  };
};

