const path = require("path");
module.exports = {
  entry: path.resolve(__dirname, "./src/App.js"),
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 4700,
    open: true,
  },
  module: {
    rules: [
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
          },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
};
