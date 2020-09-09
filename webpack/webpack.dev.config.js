const BASE_CONFIG = require('./webpack.base.config')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const path = require('path')

const CONFIG = {
    mode: 'development',
    target: 'web',
    entry: {
        app: './src/client/client.js'
    },
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    plugins: [
        new HTMLWebpackPlugin({
            template:
                '!!raw-loader!' +
                path.resolve(__dirname, '../src/views/index.ejs'),
            filename: 'index.html'
        }),
        new BrowserSyncPlugin(
            {
                server: false,
                host: 'localhost',
                port: 3000,
                proxy: 'http://localhost:3001',
                open: 'local',
                notify: false
            },
            { reload: false }
        ),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../public'),
                to: path.resolve(__dirname, '../dist/static')
            }
        ])
    ],
    devServer: {
        host: '0.0.0.0',
        port: 3001,
        hot: true,
        historyApiFallback: true,
        watchContentBase: true,
        quiet: false,
        contentBase: path.join(__dirname, '../dist'),
        watchOptions: {
            ignored: ['node_modules'],
            aggregateTimeout: 300,
            poll: 1000
        }
    }
}

module.exports = merge(BASE_CONFIG, CONFIG)
