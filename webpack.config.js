const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const dotenv = require('dotenv').config({
  path: path.join(__dirname, '.env'),
});

const dotenvPlugin = new webpack.DefinePlugin({
  'process.env': JSON.stringify(dotenv.parsed),
});

const htmlPlugin = new htmlWebpackPlugin({
  template: './public/index.html',
  filename: './index.html',
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_mudules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      components: path.resolve(__dirname, 'src/components/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      app: path.resolve(__dirname, 'src/app/'),
      hooks: path.resolve(__dirname, 'src/hooks/'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    port: dotenv.parsed.PORT,
  },
  plugins: [htmlPlugin, dotenvPlugin],
};
