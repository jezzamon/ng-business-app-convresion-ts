const path = require('path');
const webpack = require('webpack');
const helpers = require('./helpers');

const HtmlWebpackPlugin = require('html-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// set env variable to be checked by webpack
const ENV = process.env.NODE.ENV = process.env.ENV = 'development';

module.exports = {
  // point of entry for webpack, relative path - -webpack executes from root
  mode: "development",
  entry: {
    "app": "./productManagement/app/app.ts"
  },

  output: {
    // will build /dist/dev from root directory
    // path: helpers.root('dist/dev'), 
    // publicPath: '/',  // important if using webpack devserver
    filename: '[name].bundle.js', // uses entry proprty 'ng1', 'app' to output ng1.bundle.js and ng1.bundle.js 
    // chunkFilename: '[id].chunk.js'  // users commonChunkPlugin to output compiled webpack runtime
  },

  // set up your file extensions for webpack to check for to compile, check for ts first then js if no ts file exists for that name
  resolve: {
    extensions: ['.ts', '.js']
  },
  // set up our library module loaders
    // awesome-typescript-loader : translate js to ts
    // angular2-template-loader: translate ng2 templateUrls to a require statement(node/commonjs module building) ...
    // ...and inline the templates
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader']
      },
      {
        test: /\.html$/,
        loaders: 'html-loader'
      }
    ]
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'common',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  },

  // Set up some plugins
    // CommonChunkPlugin - plugin to store common modules in cache to speed up loading
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common',
    //   minChunks: Infinity
    // }),
  
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   // only pull from following two chunks, if they exist in both, add to vendor bundle
    //   chunks: ['vendor', 'app'],
    //   // minChunks - if library is used in two bundles, it will go here
    //   minChunks: 2
    // }),

    // setup webpack to output sourcemap files
    // new webpack.SourceMapDevToolPlugin({
    //   "filename": "[file].map[query]",
    //   "moduleFilenameTemplate": "[resource-path]",
    //   "fallbackModuleFilenameTemplate": "[resource-path]?[hash]",
    //   "sourceRoot": "webpack:///"
    // }),
    // this plugin takes a template, to build off on (adding refs to bundles webpack creates)
    // new HtmlWebpackPlugin({
    //   template: './productManagement/index-template.html',
    //   // define which chunks to add in dynamically (the rest we added in template so they load in order)
    //   chunks: ['app']
    // }),
    // define the current environment variables here
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),

    // plugin to handle supressing of unecssary critical warnings when webpack tries to import core.js
    new webpack.ContextReplacementPlugin(
      /\@angular(\\|\/)core(\\|\/)esm5/, 
      helpers.root(__dirname, './src'), {}
    ),

    // uncomment to see visualization of bundles in html
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static'
    // })
  ]
}