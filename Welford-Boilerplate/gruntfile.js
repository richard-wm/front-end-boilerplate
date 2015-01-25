module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
        // Compile Sass to CSS
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'css/main-style.css': 'scss/style.scss'
                }
            }
        }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['sass']);

};