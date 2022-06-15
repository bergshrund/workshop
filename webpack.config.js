const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '',
    filename: 'app.js'
  },
  devServer: {
    static: path.join(__dirname, 'public'),
    port: 9090
  },
  devtool: 'source-map',
  plugins: [
   new HtmlWebpackPlugin()
  ],
  module: {
   rules: [
   {
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: [
     {
       loader: 'babel-loader',
       options: {
        presets: [
         ['@babel/preset-env',{ targets: "defaults"}]
        ]
       }
     }
    ]
   }
   ]
  }
};
