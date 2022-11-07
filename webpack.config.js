var PACKAGE = require("./package.json");
var version = PACKAGE.version;

const path = require("path");
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const stylesHandler = 'style-loader';
const devMode = process.env.NODE_ENV !== 'production'




module.exports = {
	entry: "./src/index.js",
	
	

	module: {
		rules: [
			{
				test: /\.(woff|woff2)$/,
				type: "asset/resource",
				generator: {
					filename: "assets/fonts/[name][ext]",
				}
			},

			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},

			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
						publicPath: "./../../",
						},
					},
					{
						loader: "css-loader",
						options: {
						importLoaders: 1,
						},
					},

					{
						loader: "sass-loader",
						options: {},
					}
				]
			}
		]

		
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: devMode ? "css/[name].css" : "css/[name].css",
			chunkFilename: devMode ? "css/[id].css" : "css/[id].css",
		})
	]

 
}
