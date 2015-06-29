var gulp = require( 'gulp' );

gulp.task( 'compile', [
	'browserify',
	'through',
	'copy',
	'less',
	'install'
] );
