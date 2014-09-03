var csso = require('gulp-csso');
var usemin = require('gulp-usemin');
var ngmin = require('gulp-ngmin');
var uglify = require('gulp-uglify');
var revision = require('gulp-rev');
var util = require('gulp-util');

var debug = require('gulp-debug');

module.exports = function(gulp) {
  return gulp.task('html', ['scripts', 'sass'], function() {
    return gulp.src(['app/_includes/head.html', 'app/_includes/footer.html'])
      .pipe(debug({verbose: true}))
      .pipe(usemin({
        css: [csso(), revision()],
        js: [ngmin(),uglify(), revision()],
        // js: [util.noop()],
        html: [util.noop()]
      }))
      .pipe(gulp.dest('app/_includes'));
  });
};
