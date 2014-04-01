'use strict';

module.exports = function () {
  return {
    e2e: {
      configFile: 'karma-e2e.conf.js',
        singleRun: '<%= singleRun %>',
        autoWatch: '<%= autoWatch %>'
    },
    unit: {
      configFile: 'karma.conf.js',
        singleRun: '<%= singleRun %>',
        autoWatch: '<%= autoWatch %>'
    }
  };
};
