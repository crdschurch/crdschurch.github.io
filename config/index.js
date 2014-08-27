var gulp = require('gulp');

require('./tasks/default')(gulp);
require('./tasks/dev')(gulp);
require('./tasks/ci')(gulp);
require('./tasks/jekyll')(gulp);
require('./tasks/sass')(gulp);
require('./tasks/watch')(gulp);
