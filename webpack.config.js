var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	entry: './src/js/app.js',
	output: {
		path: './dist/javascripts',
		filename: 'app.js'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract('style-loader','css-loader')
			}
		]
	},

	plugins: [
		//new ExtractTextPlugin('../css/style.css')
		new ExtractTextPlugin('../stylesheets/style.css')
	]
};
