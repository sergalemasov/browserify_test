var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var browserify = require('gulp-browserify');

gulp.task('serve', ['scripts', 'html'], function() {

    browserSync.init({
        server: "./dist"
    });

    gulp.watch("src/*.js", ['scripts']);
    gulp.watch("src/*.html", ['html']);
    gulp.watch("dist/*.*").on('change', browserSync.reload);
});

gulp.task('scripts', function() {
  // Single entry point to browserify
  gulp.src('src/main.js')
    .pipe(browserify())
    .pipe(gulp.dest('./dist'))
});

gulp.task('html', function() {
  gulp.src('src/*.html')
    .pipe(gulp.dest('./dist'))
});

