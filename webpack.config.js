
const Dotenv = require("dotenv-webpack");
const path = require('path');

module.exports = {
    mode: "production",
    entry: path.join(__dirname, "/client/src/index.jsx"),
    output: {
        path: path.join(__dirname, '/client/dist'),
        filename: 'bundle.js',
        publicPath:'/'
    },
    plugins: [
      new Dotenv({
        systemvars: true,
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /nodeModules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/i,
          use: [{ loader: "style-loader" },{ loader: "css-loader" }]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ]
    },
    devServer: {
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, "/client/dist/")
      },
      compress: true,
      port: 3000,
    },
    devtool: 'source-map'
};