//include gulp
var gulp = require('gulp');

//include plugins
var jshint = require('gulp-jshint');

// JS hint task
gulp.task('jshint:scripts', function() {
  gulp.src('./src/scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('jshint', ['jshint:scripts']);