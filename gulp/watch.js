var gulp = require('gulp');
gulp.task('watch', function (){
  // watch for HTML changes
  gulp.watch('./src/*.html', function() {
    gulp.run('dist', 'serve');
  });
  
  // watch for asset changes
  gulp.watch('./src/assets/*', function() {
    gulp.run('dist', 'serve');
  });

  // watch for JS changes
  gulp.watch('./src/js/*.js', function() {
    gulp.run('jshint', 'dist', 'serve');
  });

  // watch for CSS changes
  gulp.watch('./src/css/*.css', function() {
    gulp.run('dist', 'serve');
  });
});
