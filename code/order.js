/**
 inline normal pre post
 eslint 代码风格检查 一般用于前置
 */ 

let path = require('path')
let nodeModules = path.resolve(__dirname, 'node_modules')
let request = 'inline-loader1!inline-loader2!./style.css'
let rules = [
    {test:/\.css$/,enforce:'pre',use:['pre-loader1','pre-loader2']},
    {test: /\.css$/, use: ['normal-loader1', 'normal-loader2'] },
    {test:/\.css$/,enforce:'post',use:['post-loader1','post-loader2']}    
]
let resolveLoader = loader => path.resolve(nodeModules,loader + '.js')
let inlineLoaders = request.split('!') //["inline-loader1","inline-loader2","./style.css"]
let resource = inlineLoaders.pop() //弹出最后一个 ./style.css
//把一个loader模块名变成一个绝对路径数组
inlineLoaders = inlineLoaders.map(resolveLoader) //map方法返回一个新数组,以一个函数为参数，循环数组中的每一个元素。函数将数组中的元素接受为单个参数 
let preLoaders = []
let postLoaders = []
let normalLoaders = []
for (let i = 0; i < rules.length;i++) {
    let rule = rules[i]
    //匹配上文件名style.css
    if (rule.test.test(resource)) {
        if (rule.enforce === 'pre') {
            preLoaders.push(...rule.use)
        } else if (rule.enforce === 'post') {
            postLoaders.push(...rule.use)
        } else {
            normalLoaders.push(...rule.use)
        }
    }
}