var gulp = require('gulp');

require('./tasks/default')(gulp);
require('./tasks/dev')(gulp);
require('./tasks/ci')(gulp);
require('./tasks/jekyll')(gulp);
require('./tasks/sass')(gulp);
require('./tasks/watch')(gulp);
require('./tasks/html')(gulp);
require('./tasks/build')(gulp);
require('./tasks/jekyll_build')(gulp);
require('./tasks/imagemin')(gulp);
require('./tasks/scripts')(gulp);
require('./tasks/cleanjs')(gulp);
require('./tasks/cleancss')(gulp);
require('./tasks/copy')(gulp);
