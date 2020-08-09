const gulp = require('gulp'),
      autoprefixer = require('gulp-autoprefixer'),
      sass = require('gulp-sass'),
      concat = require('gulp-concat'),
      cleanCSS = require('gulp-clean-css'),
      cache = require('gulp-cache'),
      imagemin = require('gulp-imagemin'),
      terser = require('gulp-terser-js'),
      clean = require('gulp-clean'),
      browserSync = require('browser-sync').create(),
      fileinclude = require('gulp-file-include');

      const { series, parallel } = require('gulp');
      sass.compiler = require('node-sass');

function clear(cb) {
  return gulp.src('dist/', {read: false, allowEmpty: true})
  .pipe(clean())
  cb();
}

function css(cb) {
  return gulp.src('app/css/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('main.css'))
  .pipe(autoprefixer('last 2 version'))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('dist/css'))
  .pipe(browserSync.stream());
  cb();
}

function js(cb) {
  return gulp.src('app/js/*.js')
  .pipe(concat('main.js')) 
  .pipe(terser({mangle: {toplevel: true}}))
  .on('error', function (error) {this.emit('end')})  
  .pipe(gulp.dest('dist/js'));
  cb();
}

function cleanassets(cb) {
  return gulp.src('dist/assets', {read: false, allowEmpty: true})
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
  .pipe(gulp.dest('dist/assets'));
  cb();
}

function include (cb) {
  return gulp.src(['app/index.html'])
  .pipe(fileinclude({
    prefix: '@@',
    basepath: '@file'
  }))
  .pipe(gulp.dest('dist/'));
  cb();
}

function pages(cb) {
  return gulp.src('app/pages/*.html')
  .pipe(fileinclude({
    prefix: '@@',
    basepath: '@file'
  }))
  .pipe(gulp.dest('dist/'));
  cb();
}

function watch(cb) {   
  browserSync.init({
    server: {
        baseDir: "dist/"
    }
  });;

  // Watched files paths
  gulp.watch('app/css/*.scss', css);
  gulp.watch('app/js/*.js', js).on('change', browserSync.reload);
  gulp.watch('app/assets/**/*', gulp.series(cleanassets, images));
  gulp.watch('app/pages/*.html', pages).on('change', browserSync.reload);
  cb();
}

exports.css = css;
exports.js = js;
exports.cleanassets = cleanassets;
exports.clearcache = clearcache;
exports.images = images;
exports.pages = pages;
exports.include = include;
exports.watch = watch;

exports.default = series(clear, parallel(css, js, images, pages), watch);

exports.build = series(clear, parallel(css, js, images, pages));







