const paths = require('./paths');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
    mode: 'production',
    devtool: false,
    output: {
        path: paths.build,
        //publicPath: '/',
        filename: 'js/[name].[contenthash].bundle.js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[contenthash].css',
            chunkFilename: '[id].css',
        }),
        new BundleAnalyzerPlugin()
    ],
    module: {
        rules: [{
            test: /\.(less|css)$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2,
                        sourceMap: false,
                    },
                },
                'postcss-loader',
                'less-loader',
            ],
        }, ],
    },
    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
        splitChunks: {
            name: 'vendors',
            chunks: 'all',
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    filename: 'js/[name].[contenthash].js'
                }
            }
        }
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
});