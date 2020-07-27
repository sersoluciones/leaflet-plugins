const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

    mode: 'production',

    entry: {
        'leaflet-fullscreen': './src/scripts/leaflet-fullscreen.js',
        'leaflet-fullscreen-css': './src/style/leaflet-fullscreen.scss',
        'leaflet-mouseposition': './src/scripts/leaflet-mouseposition.js',
        'leaflet-mouseposition-css': './src/style/leaflet-mouseposition.scss'
    },

    output: {
        path: path.resolve(__dirname, 'dist', 'js'),
        filename: '[name].min.js'
    },

    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            { 
                test: /\.(png|woff|woff2|eot|ttf|svg|jpg|jpeg)$/,
                loader: 'url-loader'
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/[name].min.css'
        })
    ]

}