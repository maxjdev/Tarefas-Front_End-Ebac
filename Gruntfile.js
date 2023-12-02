module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      less: {
        development: {
          options: {
            paths: ['./src/styles/main.less'],
          },
          files: {
            './build/styles/main.css': './src/styles/main.less',
          },
        },
      },
      uglify: {
        options: {
          compress: true,
          mangle: true,
        },
        my_target: {
          files: {
            './build/scripts/main.min.js': ['./src/scripts/main.js'],
          },
        },
      },
    });
  
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('default', ['less', 'uglify']);
};
  