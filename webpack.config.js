var HtmlWebpackPlugin = require('html-webpack-plugin');
var GoogleFontsPlugin = require('google-fonts-plugin');
var RemovePlugin = require('remove-files-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'dist/main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "https://ememme.github.io/DAFT_FELU_homework_1/",
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new GoogleFontsPlugin({
      "fonts": [{
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
      }],
      "formats": [
        "woff",
        "woff2"
      ]
    }),
    new RemovePlugin({
      /**
       * Before compilation removes entire `dist` folder.
       */
      before: {
        include: ['dist']
      },
    })
  ],
  module: {
    rules: [{
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
        use: [{
          loader: "html-loader",
          options: {
            minimize: true
          }
        }]
      },
      {
        test: [/.css$|.scss$/],
        use: [
          { loader: "style-loader", options: {} },
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: "postcss-loader",
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer')({
                  'browsers': ['> 1%', 'last 2 versions']
                }),
              ]
            }
          },
          { loader: "sass-loader", options: {} }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[hash:8].[ext]',
            outputPath: 'assets/imgs/'
          }
        }]
      }
    ]
  }
};