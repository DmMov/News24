const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
  entry: {
    main: [
      '@babel/polyfill',
      './src/index.js'
    ]
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'js/[name].js'
  },
  resolve: {
    modules: ['node_modules/', 'src/'], 
    extensions: [ '.js', '.jsx', '.json', '.jpg', '.css', '.scss', '.sass' ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[contenthash]-[name].[ext]'
            }
          },
          'img-loader'
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[folder]/[contenthash]-[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template:'public/index.html',
      favicon: 'public/favicon.ico'
    }),
    new MiniCssExtractPlugin({ 
      filename: '[name].css'
    }),
    new ImageminPlugin({ 
      test: /\.(png|jpe?g|gif|svg)$/
    }),
    new MomentLocalesPlugin({ 
      localesToKeep: ['uk-ua']
    })
  ]
}