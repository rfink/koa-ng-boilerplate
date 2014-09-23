
module.exports = {
  dist: {
    src: [
      'vendor/underscore-min.js',
      'vendor/jquery.min.js',
      'vendor/angular.min.js',
      'vendor/angular-route.min.js',
      'vendor/angular-resource.min.js',
      'module.prefix',
      '<%= src.js %>',
      '<%= src.tpljs %>',
      'module.suffix'
    ],
    dest: '<%= dist %>/assets/<%= pkg.name %>.js'
  }
};
