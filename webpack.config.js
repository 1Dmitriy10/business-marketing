const path = require('path')
const HtmlWebpackPlagin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractorPlugin = require('mini-css-extract-plugin')

module.exports = {

    entry: path.resolve(__dirname, `src`, `./js/index.js`),
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlagin({
            template: './src/index.html',

        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractorPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",

            },
            {
                test: /\.css$/,
                use: [MiniCssExtractorPlugin.loader, 'css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: ['css-loader', 'sass-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.png|jpg|svg$/,
                use: [`file-loader`],
                include: path.resolve(__dirname, `assets`, `img`)
            }

        ]
    },
    devServer: {
        port: 4200

    },
    stats: {
        children: true
    }

}