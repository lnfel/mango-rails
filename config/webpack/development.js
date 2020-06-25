process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

// Live reload
// generate source maps without the original source file inside them,
// allowing us to link it directly in the browser
if (!module.hot) {
	environment.loaders.get('sass').use.find(item => item.loader === 'sass-loader').options.sourceMapContents = false;
}

module.exports = environment.toWebpackConfig()
