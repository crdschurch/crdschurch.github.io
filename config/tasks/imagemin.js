var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');

module.exports = function(gulp) {
  return gulp.task('imagemin', ['jb'], function() {
    return gulp.src('public/media/*')
      .pipe(imagemin({
        progressive: true,
        svgoPlugins: [
          {
            removeViewBox: false
          }
        ],
        use: [pngcrush()]
      }))
      .pipe(gulp.dest('public/media/'));
  });
};
