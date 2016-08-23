var fs = require('fs')
var path = require('path')
var nodeExternals = require('webpack-node-externals')

module.exports = {
	entry: path.resolve(__dirname, 'server.js'),
	output: {
		filename: 'server.bundle.js',
	},
	target: 'node',
	externals: [nodeExternals()],
	node: {
		__filename: true,
		__dirname: true,
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader?presets[]=es2015&presets[]=react',
			},
		],
	},
}