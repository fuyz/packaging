/*
* Created by 付颖志 on 2017/3/3.
* GitHub地址：https://github.com/fuyz/packaging
*
* 1.基于JQuery的组件封装
* 2.相对于normal版；修复了无法在调用请求方法的地方设置请求到的数据 的缺点
* 3.
* */

//ajax请求组件
function ajax(obj) {

    obj = obj == undefined ? {} : obj;

    var promise = new Promise(function (resolve, reject) {

        $.ajax({
            type: obj.type == undefined ? 'GET' : obj.type,
            url: obj.url == undefined ? '' : obj.url,
            //(默认: true) 默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false。注意，同步请求将锁住浏览器，用户其它操作必须等待请求完成才可以执行。
            async: obj.async == undefined ? 'true' : obj.async,
            data: JSON.stringify(obj.data == undefined ? '' : obj.data),
            timeout: obj.timeout == undefined ? 0 : obj.timeout,
            /*预期服务器返回的数据类型。可用值:
             "xml": 返回 XML 文档,
             "html": 返回纯文本 HTML 信息；包含的script标签会在插入dom时执行。
             "script": 返回纯文本 JavaScript 代码。
             "json": 返回 JSON 数据 。
             "jsonp": JSONP 格式。使用 JSONP 形式调用函数时，如 "myurl?callback=?" jQuery 将自动替换 ? 为正确的函数名，以执行回调函数。
             "text": 返回纯文本字符串*/
            dataType: obj.dataType == undefined ? 'text' : obj.dataType,
            headers: obj.headers == undefined ? {} : obj.headers,
            //当请求之后调用。传入返回后的数据，以及包含成功代码的字符串。
            success: resolve,
            //     function (e) {
            //     // console.log(e)
            //     return ;
            // },
            //在请求出错时调用。传入XMLHttpRequest对象，描述错误类型的字符串以及一个异常对象（如果有的话）
            error: reject,
            //     function (err) {
            //     console.log(err);
            // },
            //当请求完成之后调用这个函数，无论成功或失败。传入XMLHttpRequest对象，以及一个包含成功或错误代码的字符串。
            complete: function (e) {
                // console.log(e)
            }
        })

    });

    return promise;
}

//回到顶部组件
(function () {
    $('.toTop').click(function () {
        var scrollTop = $(document).scrollTop();

        var set = setInterval(function () {
            scrollTop -= 80;
            if(scrollTop < 50){
                clearInterval(set);
            }
            $(document).scrollTop(scrollTop);
        },10)
    });
    window.onscroll = function () {
        if($(document).scrollTop() > 50){
            $('.toTop').slideDown(1000);
        }else {
            $('.toTop').hide(500);
        }
    }
})();






