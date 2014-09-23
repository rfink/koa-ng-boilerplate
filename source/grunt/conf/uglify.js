
module.exports = {
  dist: {
    files: {
      '<%= dist %>/assets/<%= pkg.name %>.min.js': [ '<%= dist %>/assets/<%= pkg.name %>.annotation.js' ]
    }
  }
};
