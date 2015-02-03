module.exports = function(grunt) {

    var autoprefixer = require('autoprefixer-core');

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Concatenate JavaScript files
        concat: {
            dist: {
                src: [
                    'js/main.js'
                ],
                dest: 'js/main.js',
            }
        },

        // Minify JavaScript files
        uglify: {
            build: {
                src: 'js/main.js',
                dest: 'js/main.js'
            }
        },

        // Compile Sass to CSS
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/main-style.css': 'scss/style.scss'
                }
            }
        },

        // Add vendor prefixes to CSS rules
        postcss: {
            options: {
                processors: [
                    autoprefixer({ browsers: ['last 2 version'] }).postcss
                ]
            },
            dist: { src: 'css/main-style.css' }
        },

        // Run predefined tasks whenever watched files are changed
        watch: {
            options: {
                livereload: true,
            },
            scripts: {
                files: ['js/**/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            css: {
                files: ['scss/**/*.scss'],
                tasks: ['sass', 'postcss'],
                options: {
                    spawn: false,
                }
            }
        },
    });

    // Load project plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default tasks
    grunt.registerTask('default', [
        'concat',
        'uglify',
        'sass',
        'postcss',
        'watch'
    ]);
};