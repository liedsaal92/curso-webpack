const HtmlWebpackPlugin = require('html-webpack-plugin');
const path=require('path');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');

module.exports={
    entry:'./src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'blundle.js'
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    mode: 'development',
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use:[
                    {
                        loader:'html-loader'
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devServer:{
        contentBase: path.join(__dirname,'dist'),
        compress: true,
        port: 3006
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename:'./index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css'
        })
    ]

}