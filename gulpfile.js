'use strict';

var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('default', [ 'typescript' ], function () {
  gulp.watch([
    'app/**/*.ts',
  ], ['typescript']);
});

gulp.task('typescript', () => {
  var tsProject = ts.createProject('tsconfig.json', { noImplicitAny: true });
  return gulp.src('app/**/*.ts')
          .pipe(tsProject())
          //.pipe(ts({
          //    noImplicitAny: true,
          //    out: 'output.js'
          //}))
          .pipe(gulp.dest('app/scripts/'));
});
