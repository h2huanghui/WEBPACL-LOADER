
function loader(source) { //source:要转换的内容 第二个参数就是它的sourceMap
    console.log('loader-one')
    return source + '//1'
}

loader.pitch = function () {
    console.log('pitch1')
}
module.exports = loader