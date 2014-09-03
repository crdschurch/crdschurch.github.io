module.exports = function(gulp, $) {
  return gulp.task('sass', ['clean:css'], function() {
    return gulp.src('app/sass/main.scss')
      .pipe($.rubySass({sourcemap: true, sourcemapBase : 'app/sass', sourcemapPath: '../', style: 'compact', 'trace': true}))
      .pipe($.autoprefixer('last 2 versions', 'Firefox >= 20', { cascade: true }))
      .pipe(gulp.dest('app/stylesheets'))
  });
};
