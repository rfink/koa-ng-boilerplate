
module.exports = {
  js: [
    'src/common/index.js',
    'src/common/**/*.js',
    'src/app/app.js',
    'src/**/*.js',
    '!src/**/*.spec.js'
  ],
  css: [ 'src/**/*.css' ],
  atpl: [ 'src/**/*.tpl.html' ],
  tpljs: [ '<%= dist %>/tmp/**/*.js' ],
  html: [ 'src/index.html' ],
  less: [ 'src/less/*.less' ],
  unit: [ 'src/**/*.spec.js' ]
};
