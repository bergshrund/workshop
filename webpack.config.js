const path = require("path");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '',
    filename: 'app.js'
  },
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
  },
  mode: 'development'
};
