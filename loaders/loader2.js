
function loader(source) { //source:要转换的内容 第二个参数就是它的sourceMap
    console.log('loader-two')
    return source + '//2'
}
loader.pitch = function () {
    console.log('pitch2')
    return 'loaderpitch2' //另外绕过后面的loader3以及自己的loader,返回的值,将作为loader1.js中的source值
}
module.exports = loader