var paths = require('../paths');

module.exports = function(gulp, $) {
  return gulp.task('scripts', ['clean:js'], function() {
      gulp.src(paths.scripts)
        .pipe($.jshint())
        .pipe($.jshint.reporter('default'))
        .pipe($.util.noop())
  });
};
