const babel = require('@babel/core')
//this.request = loader1!loader2!loader3!index.css
function loader(source,sourceMap) { //source:要转换的内容 第二个参数就是它的sourceMap
    const options = {
        presets: ["@babel/preset-env"], //babel预设
        inputSourceMap: sourceMap, //sourceMap输入
        sourceMaps: true, //告诉webpack我要输出sourceMap
        filename:this.require.split('!').pop() //不改变原始数组 指定文件名
    }
    let { code, map, ast } = babel.transform(source, options) 
    //code是转译后的代码 map是sourceMap ast抽象语法树
    return this.callback(null,code,map,ast)
}