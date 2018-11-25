var path = require("path");

module.exports = {
	entry: "./src/main.js",

	resolve: {
		alias: {
			"@app": path.resolve(__dirname, "src/"),
			"@components": path.resolve(__dirname, "src/components/")
		}
	},

	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	}
};
