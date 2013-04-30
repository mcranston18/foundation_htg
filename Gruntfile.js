module.exports = function(grunt) {

    grunt.initConfig({
     compass: {
      dist: {
        options: {
          sassDir: 'assets/scss',
          cssDir: 'assets/css',
          imagesDir: 'assets/img',
          environment: 'production',
          require: 'zurb-foundation'
        }
      }
    },
    concat: {
        js: {
            src: [
                'assets/js/lib/jquery.js',
                'assets/js/lib/angular.min.js',
                'assets/js/lib/angular-ui.min.js',
                'assets/js/app/custom.js'
            ],
            dest: 'assets/js/app.js'
            }
    },
    watch: {
        scripts: {
        files: [
            'index.html',
            'assets/scss/**/*',
            'assets/js/**/*.js',
            'jade/index.jade'
        ],
        tasks: ['default'],
        options: {
          nospawn: true
        }
      }
    },
    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          "index.html": ["jade/index.jade"]
        }
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['jade', 'compass', 'concat']);

};
