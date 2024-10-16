const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'index.bundle.js',
        clean: true, // Clean the output directory before each build
    },
    devServer: {
        port: 3010,
        static: {
            directory: path.join(__dirname, '/dist'),
        },
        hot: true,
        liveReload: true,
        headers: {
            'Cache-Control': 'no-cache',
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Path to your HTML file
            filename: 'index.html', // Output HTML file
        }),
    ],
};
