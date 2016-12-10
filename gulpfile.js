'use strict';

var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('default', [ 'typescript' ], function () {
  gulp.watch([
    'app/**/*.ts',
  ], ['typescript']);
});

gulp.task('typescript', () => {
  return gulp.src('app/**/*.ts')
          .pipe(ts({
              noImplicitAny: true,
              out: 'output.js'
          }))
          .pipe(gulp.dest('app/scripts/'));
});
