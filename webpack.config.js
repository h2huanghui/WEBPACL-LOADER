const path = require('path')
module.exports = {
    mode: 'development',
    devtool:'none',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    resolveLoader: {
        //别名
        alias: {
            "babel-loader":path.resolve(__dirname,'loaders/babel-loader.js')
        },
        modules:[path.resolve(__dirname,'loaders'),"node_modules"]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use:["babel-loader"]
            } 
        ]  
    },
    plugins: []
}