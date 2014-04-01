'use strict';

module.exports = function () {
  return {
    options: {
      csslintrc: '.csslintrc',
      formatters: [
        { id: 'csslint-xml', dest: 'csslint_report/csslint.xml' }
      ]
    },
    strict: {
      options: {
        import: 2
      },
      src: ['{.tmp,app}/styles/**/*.css']
    }
  };
};

