var cp = require('child_process')

module.exports = function(gulp, opts, $) {
  return gulp.task('jekyll', function(cb) {
    var bundle;
    bundle = cp.spawn('bundle', ['exec', 'jekyll', 'serve', '-w']);
    bundle.on('close', cb);
    bundle.stdout.on('data', function(data) {
      console.log('[jekyll]' , data.toString());
    });
  });
};
