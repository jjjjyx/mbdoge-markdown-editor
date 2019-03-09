const config = {
    // configureWebpack: () => {
    //     return {
    //         entry: './src/main.js',
    //         output: {
    //             filename: 'js/test.min.js',
    //             library: 'testVue',
    //             libraryTarget: 'umd',
    //             umdNamedDefine: true
    //         }
    //     }
    // }
    configureWebpack: {
        output: {
            libraryExport: 'default'
        }
    }
}

module.exports = config
