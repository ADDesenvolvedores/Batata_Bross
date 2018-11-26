var test = require("mocha-loader!./test");
var merge = require("webpack-merge");
var common = require("./webpack.common.js");

module.exports = merge(common, {
	module: {
		rules: [
			{
				test: /test-[\w-]+\.js$/, // /test\.js$/,
				use: "mocha-loader",
				exclude: /node_modules/
			}
		]
	}
});
