const path = require("path");

module.exports = (argv) => ({
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    libraryTarget: "commonjs2",
    publicPath: "/build/"
  },
  devtool: argv.mode !== "production" ? "inline-source-map" : false,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules)/,
        use: ["babel-loader"]
      },
    //   {
    //     test: /\.(gif|png|jpg|svg)(\?.*$|$)/,
    //     use: [
    //       {
    //         loader: "url-loader",
    //         options: {
    //           limit: 8192,
    //           name: "[name].[ext]",
    //           publicPath: "assets/"
    //         }
    //       }
    //     ]
    //   },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  externals: {
    react: "react",
    "react-dom": "react-dom"
  }
});