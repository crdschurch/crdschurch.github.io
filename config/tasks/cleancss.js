var del = require('del');

module.exports = function(gulp) {
  return gulp.task('clean:css', function(cb) {
    del(["public/stylesheets/**/*"], cb);
  });
};
