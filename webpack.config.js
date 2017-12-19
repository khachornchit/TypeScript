var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
    entry: {
        bundle: path.join(__dirname, "src", "app", "app.tsx")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].min.js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: "style-loader",
                        use: ['css-loader', 'sass-loader'],
                        publicPath: '/dist'
                    }
                )
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 5004,
        stats: "errors-only",
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Pluto Solutions",
            filename: "index.html",
            template: './src/template/template-index.html',
            minify: {
                collapseWhitespace: true
            },
            hash: true
        }),
        new ExtractTextPlugin(
            {
                filename: "app.css",
                disable: false,
                allChunks: true
            }
        )
    ]
}