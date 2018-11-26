var path = require("path");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		app: "./src/index.js"
	},

	resolve: {
		alias: {
			"@app": path.resolve(__dirname, "src/"),
			"@components": path.resolve(__dirname, "src/components/")
		}
	},

	plugins: [
		new CleanWebpackPlugin(["dist"]),
		new HtmlWebpackPlugin({
			title: "Production"
		})
	],

	module: {
		rules: [
			{
				enforce: "pre",
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "eslint-loader"
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	},

	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "../dist")
	}
};
