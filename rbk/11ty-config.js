const htmlmin = require("html-minifier");


module.exports = (config) => {
  config.addPassthroughCopy('src/css')
  config.addPassthroughCopy('src/img')
  config.addPassthroughCopy('src/js')
  config.addShortcode('eq', eq)
  config.addShortcode('conc', concat)

  config.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      })
    }
    return content
  })
  config.addShortcode('version', generateVersion)
  return {
    dir: {
      includes: 'partials',
    }
  }
}


function eq(a, b) {
  return a === b
}


function concat(...args) {
  return args.join('')
}

function generateVersion() {
  return Date.now()
}