module.exports = function(gulp) {
  return gulp.task("dev", ["jekyll", "sass", "watch"]);
};
