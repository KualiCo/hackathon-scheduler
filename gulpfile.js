var gulp = require('gulp')
var webpack = require('gulp-webpack')
var rename = require('gulp-rename')
var livereload = require('gulp-livereload')

gulp.task('webpack', function() {
    return gulp.src('client/main.jsx')
        .pipe(webpack( require('./webpack.config.js') ))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('client/'))
});

gulp.task('watch', function() {
  livereload.listen()
  gulp.watch('client/bundle.js').on('change', livereload.changed)
  gulp.watch('client/**.jsx', ['webpack'])
})

gulp.task('default', ['webpack'])
