const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENTRY_PATH = path.resolve(__dirname,"./main.js");
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
          {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(['style-loader', 'css-loader'])
          },
          { test: /\.scss$/i, loader: ExtractTextPlugin.extract(['css','sass']) },
          { test: /\.less$/i, loader: ExtractTextPlugin.extract(['css','less']) },

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
      extensions: ['','.css','.js','.json','.ico','.scss','.touch.min.css'],
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
