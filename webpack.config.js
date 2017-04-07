const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');


//=========================================================
//  ENVIRONMENT VARS
//---------------------------------------------------------
const NODE_ENV = process.env.NODE_ENV;
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;


//=========================================================
//  CONFIG
//---------------------------------------------------------
const config = {};
module.exports = config;


config.module = {
    loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
        { test: /\.html$/, loader: 'raw-loader' }
    ]
};

config.plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    })
];

config.resolve = {
    modules: ["node_modules"],
    extensions: [".js", ".json"],
}

config.entry = {
    main: ['./app/src/main'],
    vendor: './app/src/vendor'
};

config.output = {
    filename: '[name].js',
    path: path.resolve('./target'),
    publicPath: '/'
};

config.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        hash: true,
        inject: 'body',
        template: './app/src/index.html'
    })
);

config.devtool = 'cheap-module-source-map';

config.entry.main.unshift(`webpack-dev-server/client?http://${HOST}:${PORT}`);

config.module.loaders.push(
    { test: /\.scss$/, loader: 'style!css!postcss!sass' }
);

config.devServer = {
    contentBase: './app/src',
    historyApiFallback: true,
    host: HOST,
    port: PORT,
    publicPath: config.output.publicPath,
    proxy: {
        "/api": {
            target: "http://localhost:3004",
            pathRewrite: { "^/api": "" }
        }
    },
    stats: {
        cached: true,
        cachedAssets: true,
        chunks: true,
        chunkModules: false,
        colors: true,
        hash: false,
        reasons: true,
        timings: true,
        version: false
    }
}

