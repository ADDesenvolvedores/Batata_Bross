var merge = require("webpack-merge");
var common = require("./webpack.common.js");
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
	mode: "production",

	devtool: "source-map",

	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				test: /\.js(\?.*)?$/i
			})
		]
	}
});
