/**
 * Created by zhihe on 2017/3/3.
 */

var obj = obj1 = null ;

ajax({url: 'txt.json'}).then(function (res) {
    // console.log(res);
    obj = res;
    console.log(obj);
});

ajax({url: 'txt.json',dataType:'json'}).then(function (res) {
    // console.log(res);
    obj1 = res;
    console.log(obj1);
});
