var del = require('del');

module.exports = function(gulp) {
  return gulp.task('clean:js', function(cb) {
    del(["public/javascript/**/*"], cb);
  });
};
