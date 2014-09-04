var gulp = require('gulp');
var $ = require('gulp-load-plugins')()

require('./tasks/build')(gulp);
require('./tasks/ci')(gulp);
require('./tasks/cleancss')(gulp);
require('./tasks/cleanjs')(gulp);
require('./tasks/copy')(gulp);
require('./tasks/default')(gulp);
require('./tasks/dev')(gulp);
require('./tasks/html')(gulp, $);
require('./tasks/imagemin')(gulp, $);
require('./tasks/jekyll_build')(gulp);
require('./tasks/jekyll')(gulp);
require('./tasks/sass')(gulp, $);
require('./tasks/scripts')(gulp, $);
require('./tasks/watch')(gulp);
