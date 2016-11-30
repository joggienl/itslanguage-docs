'use strict';

var path = require('path');

module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      screen: {
        options: {
          paths: [
            'bower_components/bootstrap/less',
            '_assets/less'
          ],
          yuicompress: true
        },
        files: {
          'static/css/screen.css': '_assets/less/screen.less'
        }
      }
    },
    uglify: {
      site: {
        files: {
          'static/js/site.js': [
            'bower_components/jquery/jquery.js',
            'bower_components/bootstrap/js/collapse.js',
            'bower_components/bootstrap/js/scrollspy.js',
            'bower_components/bootstrap/js/button.js',
            'bower_components/bootstrap/js/affix.js',
            'bower_components/respond/respond.src.js'
          ]
        }
      }
    },
    copy: {
      bootstrap: {
        files: [{
          expand: true,
          cwd: 'bower_components/bootstrap/img/',
          src: ['**'],
          dest: 'static/img/'
        }]
      }
    },
    watch: {
      options: {
        livereload: 4001
      },
      css: {
        files: ['_assets/less/**/*'],
        tasks: ['build']
      },
      js: {
        files: ['_assets/js/**/*'],
        tasks: ['build']
      },
      html: {
        files: [
          '_config.yml',
          'index.md',
          'getting_started.md',
          '_layouts/**/*',
          '_plugins/**/*',
          'api/**/*'
        ],
        tasks: ['build']
      }
    },
    connect: {
      server: {
        options: {
          port: 4000,
          base: 'site'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jsdox');

  grunt.registerTask('build', ['less', 'uglify', 'jsdox', 'copy', 'compress', 'copy']);
  grunt.registerTask('serve', ['build', 'connect:server', 'watch']);
  grunt.registerTask('default', ['serve']);
};
