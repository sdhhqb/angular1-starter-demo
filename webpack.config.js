var webpack = require("webpack");
var path = require("path");

var config = {
	entry: {
		"vendor": ["angular"],
		"app": "./app/app.js"
	},
	
	output: {
		path: './app/dist/',
		filename: '[name].js',
		publicPath: '/dist/',
		chunkFilename: "[id].bundle.js"
	},

	module: {
		loaders: [
			{
				test: /\.js$/, 
				// include: [
				// 	path.resolve(__dirname, "app")
				// ],
				// exclude: [
				// 	path.resolve(__dirname, "app/dist"),
				// 	path.resolve(__dirname, "node_modules")
				// ],
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},

			{
				test: /\.html$/,
				loader: 'html-loader'
			}
		]
	},

	plugins: [],
	
	resolve: {
		modulesDirectories: [
			'node_modules'
		]
	}
};

module.exports = config;