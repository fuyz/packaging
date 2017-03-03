/**
 * Created by zhihe on 2017/3/2.
 */

requirejs.config({
   baseUrl: 'js'
});

define(['./ajax','../lib/jquery-3.1.0.min'], function (ajax, $) {

    // console.log(ajax);
    // console.log($);

    console.info(ajax({type:'get',url:'txt.txt'}) );

    ajax({type:'get',url:'txt.txt'}).then(function (res) {
        // console.log(res)
    },function (err) {
        console.log(err)
    });

    ajax().then(function (e) {
        // console.log(e)
    });

    ajax({url:'txt.txt',dataType: 'json'}).then(function (e) {
        console.info(e)
    })

});
