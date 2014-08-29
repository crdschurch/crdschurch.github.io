var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var util = require('gulp-util');
var autoprefixer = require('gulp-autoprefixer')

module.exports = function(gulp) {
  return gulp.task('sass', function() {
    return gulp.src('app/sass/main.scs')
      .pipe(sass({sourcemap: 'none'}).on('error', util.log))
      .pipe(autoprefixer('last 2 versions', 'Firefox >= 20', { cascade: true }))
      .pipe(gulp.dest('app/stylesheets'))
  });
};
