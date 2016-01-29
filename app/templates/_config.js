module.exports = {
  domain: 'craft.dev:<%= portHost %>',
  webpack: require('./webpack.config'),
  paths: {
    input: {
      all: 'craft/templates/**/*',
      html: 'craft/templates/**/',
      scss: 'public/src/css/scss/*.scss',
      js:   'public/src/js/**/*.js',
      images:'public/src/images/*',
      config: 'craft/config/*.php'
    },
    output: {
      css:  'public/src/css',
      cssBuild: 'public/dist/css',
      images: 'public/src/images',
      js: 'public/src/js',
      jsBuild: 'public/dist/js'
    }
  }
}