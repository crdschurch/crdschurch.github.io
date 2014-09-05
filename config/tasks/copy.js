module.exports = function(gulp) {
  return gulp.task('copy', ['html'], function() {
    gulp.src('app/_includes/stylesheets/*.css')
      .pipe(gulp.dest('public/stylesheets/'));
    gulp.src('app/_includes/javascript/*.js')
      .pipe(gulp.dest('public/javascript/'));
  });
};
