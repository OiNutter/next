var gulp = require('gulp'),
    requireDir = require('require-dir'),
    runSequence = require('run-sequence')

requireDir('./gulp')

function watchAndRebuild() {
    gulp.watch(['./compile/**/*'], ['build'])
}

function watchAndRecompile() {
    gulp.watch('./js/**/*', ['browserify'])
    gulp.watch( ['./index.html','./index.js'], ['through'])
    gulp.watch('./style/**/*', ['less'])
}

gulp.task( 'watch-all', function () {
    watchAndRecompile()
    watchAndRebuild()
})

gulp.task('watch-compile-build', runSequence('compile', 'build', 'watch-all'))

gulp.task('watch-compile', ['build'], watchAndRecompile )
gulp.task('watch-build', ['build'], watchAndRebuild )

gulp.task('default', ['watch-compile-build' ] )
