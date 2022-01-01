const path = require("path");
const { VueLoaderPlugin } = require("vue-loader/dist/index");

module.exports = {
  mode: "development",
  entry: "./single-spa.config.js",
  output: {
    publicPath: "/dist/",
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader",
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, "node_modules")],
  },
  plugins: [new VueLoaderPlugin()],
  externals: [],
  devServer: {
    static: __dirname,
    host: "localhost",
    port: 15220,
    hot: true, //开启热加载
    historyApiFallback: true,
  },
};
