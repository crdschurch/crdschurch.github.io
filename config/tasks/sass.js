var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var util = require('gulp-util');
var autoprefixer = require('gulp-autoprefixer');

module.exports = function(gulp) {
  return gulp.task('sass', ['clean:css'], function() {
    //util.noop();
    return gulp.src('app/sass/main.scss')
      // .pipe(sass({sourcemap: false}).on('error', util.log))
      // sourcemaps are generated, but the sources property is not correct, reflects local env
      // .pipe(sass({sourcemap: true, style: 'compact'}).on('error', util.log))
      .pipe(sass({sourcemap: true, sourcemapBase : 'app/sass', sourcemapPath: '../', style: 'compact', 'trace': true}))
      .pipe(autoprefixer('last 2 versions', 'Firefox >= 20', { cascade: true }))
      .pipe(gulp.dest('app/stylesheets'))
  });
};
