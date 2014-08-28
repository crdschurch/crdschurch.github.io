var cp = require('child_process');

module.exports = function(gulp) {
  // return gulp.task('jb', ['html'], function(cb) {
  return gulp.task('jb', function(cb) {
    var bundle;
    bundle = cp.spawn('bundle', ['exec', 'jekyll', 'build', '--config', '_config.yml']);
    bundle.on('close', cb);
    bundle.stdout.on('data', function(data) {
      console.log('[jekyll] ', data.toString());
    });
  });
};

//crossroads.net jekyll build task
// var cp = require('child_process');
//
// module.exports = function(gulp) {
//   return gulp.task("jb", ['copy'], function(cb) {
//     var bundle;
//     bundle = cp.spawn("bundle", ["exec", "jekyll", "build", "--config", "_config.yml,config/_config.ci.yml"]);
//     bundle.on("close", cb);
//     bundle.stdout.on("data", function(data) {
//       console.log("[jekyll] ", data.toString());
//     });
//   });
// };



//labs jekyll task
//
// var cp = require('child_process')
//
// module.exports = function(gulp, opts, $) {
//   return gulp.task('jekyll', function(cb) {
//     var bundle;
//     bundle = cp.spawn('bundle', ['exec', 'jekyll', 'serve', '-w']);
//     bundle.on('close', cb);
//     bundle.stdout.on('data', function(data) {
//       console.log('[jekyll]' , data.toString());
//     });
//   });
// };
