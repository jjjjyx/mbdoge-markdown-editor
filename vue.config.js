
const config = {
    configureWebpack: (config) => {
        // 删除console插件
        if (process.env.NODE_ENV === 'production') {
            // let plugins = [
            //     new UglifyJsPlugin({
            //         uglifyOptions: {
            //             compress: {
            //                 warnings: false,
            //                 drop_console: true,
            //                 drop_debugger: true
            //             },
            //             output: {
            //                 // 去掉注释内容
            //                 comments: false
            //             }
            //         },
            //         sourceMap: false,
            //         parallel: true
            //     })
            // ]
            // console.log(config.optimization.minimizer[0])
            config.optimization.minimizer[0].options.sourceMap = false
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
            config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
            // config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
        }
    }
    // configureWebpack: {
    //     output: {
    //         libraryExport: 'default'
    //     }
    // }
}

module.exports = config
