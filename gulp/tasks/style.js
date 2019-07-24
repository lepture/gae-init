const gulp = require('gulp-help')(require('gulp'));
const $ = require('gulp-load-plugins')();
const config = require('../config');
const paths = require('../paths');
const util = require('../util');

gulp.task('style', false, () => {
  gulp
    .src(config.style)
    .pipe(
      $.plumber({
        errorHandler: util.onError,
      }),
    )
    .pipe($.less())
    .pipe(
      $.cssnano({
        discardComments: {
          removeAll: true,
        },
        zindex: false,
      }),
    )
    .pipe(
      $.size({
        title: 'Minified styles',
      }),
    )
    .pipe(gulp.dest(paths.static.min + '/style'));
});

gulp.task('style:dev', false, () => {
  gulp
    .src(config.style)
    .pipe(
      $.plumber({
        errorHandler: util.onError,
      }),
    )
    .pipe($.sourcemaps.init())
    .pipe($.less())
    .pipe(
      $.autoprefixer({
        map: true,
      }),
    )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(paths.static.dev + '/style'));
});

// ---
// generated by coffee-script 1.9.2
