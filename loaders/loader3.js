
function loader(source) { //source:要转换的内容 第二个参数就是它的sourceMap
    console.log('loader-three')
    return source + '//3'
}
loader.pitch = function () {
    console.log('pitch3')
}
module.exports = loader