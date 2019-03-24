var HtmlWebpackPlugin = require('html-webpack-plugin');
var GoogleFontsPlugin = require('google-fonts-plugin')
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin(), 
    new GoogleFontsPlugin({
      "fonts": [
          {
              "family": "Lato",
              "variants": [
                  "300",
                  "300i",
                  "400",
                  "700i",
                  "900"
              ],
              "subsets": [
                  "latin-ext"
              ]
          }
      ],
      "formats": [
          "woff",
          "woff2"
      ]
      })
    ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: [/.css$|.scss$/],
        use: [
          "style-loader", 
          'css-loader', 
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:8].[ext]',
              outputPath: 'assets/imgs/'
            }
          }
        ]
      }
    ] 
  }
};