const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENTRY_PATH = path.resolve(__dirname,"./main.js");
const OUTPUT_PATH = path.resolve(__dirname,"build");

module.exports = {
    devtool:'source-map',
    entry: ENTRY_PATH,
    output: {
        path: OUTPUT_PATH,
        filename: 'bundle.js',
        publicPath:'/'
    },
    module: {
        loaders: [
          {
            test: /^(?!.*\.min\.css$).*\.css$/,
            loader: ExtractTextPlugin.extract(['style-loader', 'css-loader?sourceMap'])
          },
          { test: /\.scss$/i, loader: ExtractTextPlugin.extract(['css','sass']) },
          { test: /\.less$/i, loader: ExtractTextPlugin.extract(['css','less']) },

          {
            test: /\.js?$/,
            include: [
              path.resolve(__dirname, "app")
            ],
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            options: {
              presets: ["es2015"]
            }
          },
          {test: /\.json$/, loader: 'json'},

          {test: /\.(png|jpg|gif|ico)$/, loader: "url-loader?limit=50000&name=[path][name].[ext]"},
          {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader"},
          {
            test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file-loader?mimetype=application/font-woff&name=[path][name].[ext]"
          },
          {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file-loader?mimetype=application/x-font-ttf&name=[path][name].[ext]"
          },
          {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?\??$/,
            loader: "file-loader?mimetype=application/vnd.ms-fontobject&name=[path][name].[ext]"
          },
          {
            test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file-loader?mimetype=application/font-otf&name=[path][name].[ext]"
          }
        ]
    },
    resolve:{
      extensions: ['','.css','.js','.json','.ico','.scss'],
      alias: {
        "styles":path.resolve(__dirname,'app/assets/styles/'),
        "components":path.resolve(__dirname,'app/components/'),
        "utils":path.resolve(__dirname,'app/utils/'),
        "views":path.resolve(__dirname,'app/views/'),
        "configs":path.resolve(__dirname,'app/configs/')
      }
    },
    devServer: {
      port: 3000,
      historyApiFallback: true,
      noInfo: true
    },
    plugins: [
      // new webpack.optimize.CommonsChunkPlugin(),

      new ExtractTextPlugin("styles.css"),

      new HtmlWebpackPlugin({
        hash: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: false,
          removeCommentsFromCDATA: true
        },
        template: './index.html'
      })
  ]

}
