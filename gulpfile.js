const gulp = require('gulp'),
      autoprefixer = require('gulp-autoprefixer'),
      sass = require('gulp-sass'),
      concat = require('gulp-concat'),
      cleanCSS = require('gulp-clean-css'),
      cache = require('gulp-cache'),
      imagemin = require('gulp-imagemin'),
      tinypng = require('gulp-tinypng-compress'),
      terser = require('gulp-terser-js'),
      clean = require('gulp-clean'),
      browserSync = require('browser-sync').create();

      const { series, parallel } = require('gulp');
      sass.compiler = require('node-sass');

function clear(cb) {
  return gulp.src('Squinty/', {read: false, allowEmpty: true})
  .pipe(clean())
  cb();
}

function css(cb) {
  return gulp.src('app/css/scss/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer('last 2 version'))
  .pipe(concat('main.css'))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('Squinty/css'))
  .pipe(browserSync.stream());
  cb();
}

function js(cb) {
  return gulp.src('app/js/*.js')
  .pipe(concat('main.js')) 
  .pipe(terser({mangle: {toplevel: true}}))
  .on('error', function (error) {this.emit('end')})  
  .pipe(gulp.dest('Squinty/js'));
  cb();
}

function cleanassets(cb) {
  return gulp.src('Squinty/assets', {read: false, allowEmpty: true})
  .pipe(clean())
  cb();
}

function clearcache(cb) {
  cache.clearAll()
  cb();
}

function images(cb) {
  return gulp.src('app/assets/**/*.{jpg,png,svg,ico}')
  .pipe(cache(
    imagemin(),
    { name: 'images' }
  ))
  .pipe(gulp.dest('Squinty/assets'));
  cb();
}

function pages(cb) {
  return gulp.src('app/*.html')
  .pipe(gulp.dest('Squinty/'));
  cb();
}

function watch(cb) {
  browserSync.init({
    server: {
        baseDir: "Squinty/"
    }
  });;

  // Watched files paths
  gulp.watch('app/css/scss/*.scss', css);
  gulp.watch('app/js/**', js).on('change', browserSync.reload);
  gulp.watch('app/assets/**/*', gulp.series(cleanassets, images));
  gulp.watch('app/*.html', pages).on('change', browserSync.reload);
  cb();
}

exports.css = css;
exports.js = js;
exports.cleanassets = cleanassets;
exports.clearcache = clearcache;
exports.images = images;
exports.pages = pages;
exports.watch = watch;

exports.default = series(clear, parallel(css, js, images, pages), watch);







