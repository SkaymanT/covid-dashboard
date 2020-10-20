const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';
  const isDev = !isProduction;
  const config = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'none' : 'source-map',
    watch: !isProduction,
    entry: {
      main: ['./src/pages/main/sass/main.scss', './src/pages/main/main.js'],
      pets: ['./src/pages/pets/sass/pets.scss', './src/pages/pets/pets.js'],
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },

    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates style nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        // {
        //   test: /\.html$/i,
        //   loader: 'html-loader',
        // },
      ],
    },

    plugins: [
      new CleanWebpackPlugin(),
      new HTMLWebpackPlugin({
        template: __dirname + '/src/pages/main/main.html',
        filename: 'main.html',
        minify: isProduction,
        chunks: ['main'],
      }),
      new HTMLWebpackPlugin({
        template: __dirname + '/src/pages/pets/pets.html',
        filename: 'pets.html',
        minify: isProduction,
        chunks: ['pets'],
      }),
      new CopyWebpackPlugin([{ from: './src/assets', to: 'assets' }]),
      new MiniCssExtractPlugin({
        ffilename: isDev ? '[name].css' : '[name].[hash].css',
        chunkFilename: '[id].css',
      }),
    ],
  };

  return config;
};
