'use strict';

module.exports = function () {
  return {
    mobile: {
      src: 'app/mobile.html',
      options: {
        dest: 'dist/mobile'
      }
    },
    desktop: {
      src: 'app/desktop.html',
      options: {
        dest: 'dist/desktop'
      }
    }
  };
};
