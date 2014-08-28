module.exports = function(gulp, $) {
  return gulp.task('sass', ['clean:css'], function() {
    return gulp.src('app/sass/main.scss')
      .pipe($.rubySass({sourcemap: true, sourcemapBase : 'app/sass', sourcemapPath: '../', style: 'compact', 'trace': true}))
      .pipe($.autoprefixer('last 2 versions', 'Firefox >= 20', { cascade: true }))
      .pipe(gulp.dest('app/stylesheets'))
  });
};


//
// var gulp = require('gulp');
// var sass = require('gulp-ruby-sass');
// var prefix = require('gulp-autoprefixer');
//
// gulp.task('default', function () {
//     gulp.src('src/app.scss')
//         .pipe(sass({sourcemap: true, style: 'compact'}))
//         .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))
//         .pipe(gulp.dest('dist'));
// });
