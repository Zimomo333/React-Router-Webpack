const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'               // 打包输出的js包名
    },
    devServer: {
        contentBase: './dist'               // server运行的资源目录
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // jsx/js文件的正则
                exclude: /node_modules/, // 排除 node_modules 文件夹
                use: {
                    loader: 'babel-loader',
                    options: {
                        // babel 转义的配置选项
                        presets: [
                            // 添加 preset-react
                            "@babel/preset-react",      // 转义JSX
                            "@babel/preset-env"         // 转移ES6+
                        ]
                    }
                }
            },
            {
                test: /\.css$/,             // 处理 antd 样式
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(woff|ttf)$/,	    // 处理 antd 字体
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({             // 自动生成注入js的index主页
            template: './public/index.html' // 自定义index模板
        })
    ]
}