var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
	entry: {
		"vendor": ["angular","angular-ui-router", "oclazyload", "bootstrap"],
		"app": "./app/app.js"
	},
	
	output: {
		path: './app/dist/',
		filename: 'js/[name].js',
		publicPath: '/dist/',
		chunkFilename: "js/[id].bundle.js"
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: [
					path.resolve(__dirname, "node_modules")
				],
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},

			{
				test: /\.css$/,
				loaders: ["style", "css?-minimize"]
			},

			{
				test: /\.(png|jpg|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url?limit=512&&name=[path][name].[ext]?[hash]'
			},

			{
				test: /\.html$/,
				loader: 'html-loader'
			}
		]
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			names: ["vendor"],
			minChunks: Infinity
		})
	]
};

var env = process.env.NODE_ENV;
console.log("node env: \x1b[32m" + env + "\x1b[0m");
// 生产环境配置
if (env === 'production') {
	// 压缩代码
	config.plugins.push(
		new webpack.optimize.UglifyJsPlugin()
	);
	// 开启source-map
	config.devtool = "source-map";
	// 更新index.html
	config.plugins.push(
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'app/template.html',
			inject: 'body'
		})
	);
	// 文件名带上hash
	config.output.filename = "js/[hash].[name].js";
	config.output.chunkFilename = "js/[id].[hash].bundle.js";
}

module.exports = config;