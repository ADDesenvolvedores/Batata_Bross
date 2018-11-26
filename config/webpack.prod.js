var merge = require("webpack-merge");
var dev = require("./webpack.dev");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(dev, {
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				test: /\.js(\?.*)?$/i
			})
		]
	}
});
