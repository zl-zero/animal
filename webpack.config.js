const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const ENTRY_PATH = path.resolve(__dirname,"app/main.js");
const OUTPUT_PATH = path.resolve(__dirname,"build");

module.exports = {
    //devtool:'source-map',
    entry: {
      index:ENTRY_PATH,
      // vendor: ['react', 'react-dom', 'react-router']
    },
    output: {
        path: OUTPUT_PATH,
        filename: 'bundle.js',
        publicPath:'/'
    },
    // externals: {
    //   'react': 'React',
    //   'react-dom': 'ReactDOM',
    //   'amazeui-touch': 'AMUITouch',
    //   'react-addons-css-transition-group': ['React', 'addons', 'CSSTransitionGroup']
    // },
    module: {
        loaders: [
          {
            test: /\.jsx?$/,
            loaders: [
              'babel',
            ],
            include: [
              // 注意包含 AMT 源文件目录
              path.resolve(__dirname, 'node_modules/amazeui-touch/js'),
            ]
          },
          { test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style", "css!sass")
          },
          {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
          },
          {test: /\.json$/, loader: 'json'},

          {test: /\.(png|jpg|gif|ico)$/, loader: "url-loader?limit=50000&name=[path][name].[ext]"},
          {
            test: /\.txt$|\.json$|\.webapp$/,
            loader: 'file?name=[path][name].[ext]&context=app'
          },
          {
            test: /\.svg$/,
            loader: 'url?mimetype=image/svg+xml&name=[name].[ext]'
          },
          {
            test: /\.woff$/,
            loader: 'url?mimetype=application/font-woff&name=[name].[ext]'
          },
          {
            test: /\.woff2$/,
            loader: 'url?mimetype=application/font-woff2&name=[name].[ext]'
          },
          {
            test: /\.eot$/,
            loader: 'url?mimetype=application/font-woff2&name=[name].[ext]'
          },
          {
            test: /\.[ot]tf$/,
            loader: 'url?mimetype=application/octet-stream&name=[name].[ext]'
          },
        ]
    },
    postcss: [autoprefixer({browsers: ['> 1%', 'last 2 versions', 'ie 10']})],
    resolve:{
      extensions: ['','.css','.js','.json','.ico','.scss','.touch.min.css'],
      alias: {
        "assets":path.resolve(__dirname,'app/assets/'),
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
      // new webpack.optimize.CommonsChunkPlugin({
      //      names: ['vendor','manifest'],
      //  }),

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
      // new webpack.optimize.UglifyJsPlugin({
      //   compress: {
      //     warnings: false
      //   }
      // })
  ]

}
