const {resolve} = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./common.js');

module.exports = function (env) {
    return webpackMerge(commonConfig(), {
        devtool: 'cheap-module-source-map',

        output: {
            filename: '[name].build.js',
            path: resolve(__dirname, './../../dist/prod'),
            publicPath: '/assets/'
        },

        plugins: [
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),
            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                mangle: {
                    screw_ie8: true,
                    keep_fnames: true
                },
                compress: {
                    screw_ie8: true
                },
                comments: false
            })
        ]
    })
}