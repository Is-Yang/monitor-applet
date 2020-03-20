// 解析链接中的参数
let getQueryString = function (url, name) {
    var reg = new RegExp('(^|&|/?)' + name + '=([^&|/?]*)(&|/?|$)', 'i')
    var r = url.substr(1).match(reg)
    if (r != null) {
        return r[2]
    }
    return null;
}

//导出方法，外部调用
module.exports = {
    getQueryString: getQueryString,
}
