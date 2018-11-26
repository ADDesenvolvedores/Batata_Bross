const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			}
		]
	},

	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "../dist")
	}
};
