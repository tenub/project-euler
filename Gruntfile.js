module.exports = function (grunt) {

	var pkg = require('./package.json');

	grunt.registerTask('default', ['clean', 'concat', 'jshint', 'uglify']);
	grunt.registerTask('doc', ['jsdoc']);

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jsdoc');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.initConfig({
		clean: {
			all: ['build', 'dist']
		},
		concat: {
			js: {
				src: ['src/js/*.js'],
				dest: 'build/js/project-euler.js'
			}
		},
		jshint: {
			all: ['Gruntfile.js', 'src/js/*.js']
		},
		jsdoc: {
			dist: {
				src: ['src/js/*.js'],
				options: {
					destination: 'doc'
				}
			}
		},
		uglify: {
			js: {
				files: [{
					expand: true,
					cwd: 'build/js',
					src: '**/*.js',
					dest: 'dist/js'
				}]
			}
		}
	});

};