const htmlmin = require("html-minifier");

module.exports = (config) => {
  config.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });
  config.addPassthroughCopy('src/css')
  config.addPassthroughCopy('src/img')
  config.addPassthroughCopy('src/js')
  config.addShortcode('equal', eq)
  config.addShortcode('conc', concat)
  config.addShortcode('json', json)
  return {
    dir: {
      includes: 'partials'
    }
  }
}

function eq(a, b) {
  return a === b
}

function concat(...args) {
  return args.join('')
}

function json(str) {
  return JSON.parse(str)
}
