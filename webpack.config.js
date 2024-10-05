const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname,"dist"),
    filename: "bundle.js",
  },
  mode: "development",
  devServer:{
    static: "./dist"
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: "/node_modules/",
            use: {
                loader: "babel-loader"
            }
        }
    ]
  }
};
