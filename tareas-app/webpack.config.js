const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/app/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'main.js'
	},

	devServer: {
		port: 5000
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
}