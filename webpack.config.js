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
            directory: path.join(__dirname, '/public'),
        },
        hot: true,
        watchFiles: ['src/**/*'], // Watch files in src folder
        liveReload: true,
        historyApiFallback: true, // Enable for React Router
        allowedHosts: 'all',
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
