var path = require('path');
var webpack = require('webpack');
module.exports = {
	entry: ['./index.js'],
	output: {
		path: path.join(__dirname,'disk'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				query: {
					presets: ['es2015','react']
				},
				include: __dirname,
				exclude: /node_modules/
			},
		]
	},
	resolve: {
        extensions: ['', '.js', '.jsx'],
		modulesDirectories: ['react-redux-todoList', 'node_modules']
    }
}
