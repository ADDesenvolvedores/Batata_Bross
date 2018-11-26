var path = require("path");

module.exports = {
	entry: "./src/main.js",

	resolve: {
		alias: {
			"@app": path.resolve(__dirname, "src/"),
			"@components": path.resolve(__dirname, "src/components/")
		}
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader", "eslint-loader"]
			}
		]
	},

	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "../dist")
	}
};
