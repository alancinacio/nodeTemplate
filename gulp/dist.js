var gulp = require('gulp');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var browserify = require('gulp-browserify');

gulp.task('dist:assets', function() {
  var imgSrc = './src/assets/**/*';
  var imgDst = './dist/assets';
  
  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});

gulp.task('dist:html', function() {
  var htmlSrc = './src/*.html',
      htmlDst = './dist';

  gulp.src(htmlSrc)
    .pipe(changed(htmlDst))
    .pipe(minifyHTML())
    .pipe(gulp.dest(htmlDst));
});

gulp.task('dist:js', function() {
  gulp.src('./server.js')
    .pipe(browserify({
		  insertGlobals : true,
		  debug : !gulp.env.production
		}))
		.pipe(gulp.dest('./dist/js/'));
});

gulp.task('dist:css', function() {
  gulp.src(['./src/css/*.css'])
    .pipe(concat('main.css'))
    .pipe(autoprefix('last 2 versions'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('dist', ['dist:assets', 'dist:html', 'dist:js', 'dist:css']);