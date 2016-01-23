var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('start-server', function() {
  nodemon({
    script: 'server.js',
    ext: 'json js',
    watch: ['../src/']
  });
});

gulp.task('serve',['start-server']);