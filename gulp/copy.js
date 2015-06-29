var gulp = require( 'gulp' );

gulp.task( 'copy', function () {
	return gulp.src( [ './bower_components/semantic/dist/themes/default/**/*' ] )
		.pipe( gulp.dest( './compile/style/themes/default' ) );
} );
