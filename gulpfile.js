var gulp = require('gulp')
var webpack = require('gulp-webpack')
var rename = require('gulp-rename')
var mainBowerFiles = require('main-bower-files')
var livereload = require('gulp-livereload')
var filter = require('gulp-filter')
var flatten = require('gulp-flatten')
var concat = require('gulp-concat')

gulp.task('webpack', function() {
    return gulp.src('client/main.jsx')
        .pipe(webpack(require('./webpack.config.js') ))
        .pipe(rename('main.js'))
        .pipe(gulp.dest('client/bundle/'))
});

// bower vendor libs
// http://stackoverflow.com/questions/22901726/how-can-i-integrate-bower-with-gulp-js
gulp.task('bower', function() {

    var jsFilter = filter('*.js')
    var cssFilter = filter('*.css')

    return gulp.src(mainBowerFiles())

        // JS BUNDLING
        .pipe(jsFilter)
        .pipe(concat('bower.js'))
        .pipe(gulp.dest('client/bundle'))
        .pipe(jsFilter.restore())

        // CSS BUNDLING
        .pipe(cssFilter)
        .pipe(gulp.dest('client/bundle'))

})

// you can't do it this way, because it is out of order
gulp.task('js-bower-concat', ['js-bower-copy'], function() {
    return gulp.src('client/bundle/bower/**.js')
        .pipe(concat('bower.js'))
        .pipe(gulp.dest('client/bundle'))
})

gulp.task('watch', function() {
  livereload.listen()
  gulp.watch(['client/bundle/main.js', 'client/main.css']).on('change', livereload.changed)
  gulp.watch('client/**/*.jsx', ['webpack'])
})

gulp.task('default', ['webpack', 'bower'])
