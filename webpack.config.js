"use strict";
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "inline-source-map",
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: '~',
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  devServer: {
    publicPath: "/",
    historyApiFallback: true,
    hot: true,
    proxy: {
      "/api": {
        target: "https://us-central1-fashionable-typescript.cloudfunctions.net",
        default: false,
        changeOrigin: true,
        secure: false,
      },
    },
  },
  mode: "development",
  entry: { main: "./src/index.tsx", vendor: ["@material-ui/styles"] },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: __dirname + "/src/index.html",
      inject: "body",
    }),
  ],
  output: {
    filename: "[id].main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};
