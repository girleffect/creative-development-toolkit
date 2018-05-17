module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Copy web assets from bower_components to more convenient directories.
        copy: {
            main: {
                files: [
                    // Vendor scripts.
                    {
                        expand: true,
                        cwd: 'bower_components/bootstrap-sass/assets/javascripts/',
                        src: ['**/*.js'],
                        dest: 'assets/js/'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/jquery/dist/',
                        src: ['**/*.js', '**/*.map'],
                        dest: 'assets/js/'
                    },

                    // Fonts.
                    {
                        expand: true,
                        filter: 'isFile',
                        flatten: true,
                        cwd: 'bower_components/',
                        src: ['bootstrap-sass/assets/fonts/**'],
                        dest: 'assets/fonts/'
                    },

                    // Stylesheets
                    {
                        expand: true,
                        cwd: 'bower_components/bootstrap-sass/assets/stylesheets/',
                        src: ['**/*.scss'],
                        dest: 'assets/scss/'
                    }
                ]
            },
        },

        // Compile SASS files into minified CSS.
        sass: {
            options: {
                includePaths: ['bower_components/bootstrap-sass/assets/stylesheets']
            },
            dist: {
                options: {
                    outputStyle: 'expanded'
                },
                files: {
                    'assets/css/style.css': 'scss/source.scss'
                }
            }
        },

        // Watch these files and notify of changes.
        watch: {
            grunt: { files: ['Gruntfile.js'] },

            sass: {
                files: [
                    'scss/**/*.scss'
                ],
                tasks: ['sass']
            }
        }
    });

    // Load externally defined tasks.
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Establish tasks we can run from the terminal.
    grunt.registerTask('build', ['sass', 'copy']);
    grunt.registerTask('default', ['build', 'watch']);
}