var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ['babel-polyfill', './src/main.js'], //项目入口文件，webpack 会从main.js开始，把所有依赖都加载
    devtool: '#eval-source-map',
    output: {
        path: path.resolve(__dirname, './dist'), //项目的打包文件路径
        publicPath: '/dist/', //通过devServer访问路径
        filename: 'build.js' //打包后的文件名
    },
    devServer: {
        historyApiFallback: true, //设置为true那么所有的路径都执行 index.html
        overlay: true, //将错误显示在html上                                                                                                                     
    },
    plugins: [
        //new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'index.html',
          inject: 'body',
        }),
        // new MiniCssExtractPlugin({
        //   // Options similar to the same options in webpackOptions.output
        //   // both options are optional
        //   filename: devMode ? '[name].css' : '[name].[hash].css',
        //   chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        // }),
        // new CopyWebpackPlugin([
        //   {
        //     from: path.resolve(__dirname, './static'),
        //     to: 'static',
        //     ignore: ['.*']
        //   }
        // ])
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            // '@': resolve('src'),
        }
    },
    module :{
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                // options: vueLoaderConfig
                
              },
            { //匹配后缀名为css的文件,然后分别用css-loader，vue-style-loader去解析
                //解析器的执行顺序是从下往上(先css-loader再vue-style-loader)
                  test: /\.css$/,
                  use: [
                      'vue-style-loader',
                      'css-loader'
                  ],
              },
              {
                  test: /\.less$/,
                  use: [
                      'vue-style-loader',
                      'css-loader',
                      'less-loader'
                  ],
              },
              {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/  ,
                options:{
                    plugins:['syntax-dynamic-import']
                }
              }
        ]
    }
    
}