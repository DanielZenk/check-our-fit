'use strict';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    publicPath: "/",
    hot: true,
    proxy: {
      '/api': {
        target: "https://us-central1-fashionable-typescript.cloudfunctions.net",
        default: false,
        changeOrigin: true,
        secure: false,
      }
    }
  },
  mode: 'development',
  entry: './src/index.tsx',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: __dirname + '/src/index.html',
      inject: 'body'
    }),
  ],
	output: {
		filename: '[id].main.js',
		path: path.resolve(__dirname, 'dist')
	},
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    }
};