'use strict';

module.exports = function () {
  return {
    server: {
      url: 'http://localhost:<%= connect.options.port %>'
    }
  };
};
