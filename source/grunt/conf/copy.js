
module.exports = {
  main: {
    files: [
      {
        src: 'index.html',
        dest: '<%= dist %>/',
        cwd: 'src',
        expand: true
      },
      {
        src: ['**'],
        dest: '<%= dist %>/assets/',
        cwd: 'src/assets',
        expand: true
      }
    ]
  }
};
