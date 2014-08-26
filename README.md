#crdschurch.github.io#


![Codeship Status](https://www.codeship.io/projects/b3642f40-b8f5-0131-7963-32260bb6295c/status "Codeship Status")

#crdschurch.github.io#


![Codeship Status](https://www.codeship.io/projects/b3642f40-b8f5-0131-7963-32260bb6295c/status "Codeship Status")

>>>>>>> Testing the CI build
##Prerequisites##
- git (needed for getting started, used for source control)
- Ruby (needed for RubyGems, Jekyll, & SASS)
- RubyGems (needed to install Jekyll & SASS)
- Node (needed for npm, npm needed for bower)
- Jekyll - Server and Static Generator, you'll need this for your local testing
- SASS - Preprocessor for our CSS, if you are doing any style changes you'll need this
- Bower - JS and CSS dependency managment, you'll need this to get 3rd party libraries/dependencies
- Python (needed for code highlighting, Pygments) **optional**

##Quick Start##
- git clone https://github.com/crdschurch/crdschurch.github.io
- cd crdschurch.github.io
- git submodule init
- git submodule update
- bower update
- sass --watch --sourcemap sass:stylesheets

**In a new terminal window:**
- jekyll serve -w

This watches the changes done to your posts and it refreshes the build

##Installation Instructions##
- [Installing git](http://git-scm.com/downloads)
- [Installing Ruby](https://www.ruby-lang.org/en/downloads/)
- [Installing RubyGem](http://rubygems.org/pages/download)
- [Installing Node](http://nodejs.org/)
- [Installing Python](http://www.python.org/getit/)
- Installing Jekyll
  - sudo gem install jekyll
- Installing SASS###
  - sudo gem install sass
  - Note: we use sourcemaps which is only supported in v3.3 and up. gem install sass -v '>=3.3.0alpha' --pre
- Installing Bower
  - sudo npm install -g bower
