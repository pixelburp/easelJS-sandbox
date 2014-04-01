'use strict';

module.exports = function () {
  return {
    options: {
      basePath: 'dist/mobile'
    },
    all: {
      dest: 'dist/mobile/pplotteries.appcache',
      cache: [
        'dist/mobile/images/**/*',
        'dist/mobile/scripts/**/*',
        'dist/mobile/styles/**/*',
      ],
      network: '*'
    }
  };
};

