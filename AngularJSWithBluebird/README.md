# 測試Angularjs + Bluebirdjs套件
bluebird是一個promise的套件, 可以用在後端及前端.

### 加入bluebird套件
`bower install bluebird --save-dev`

### 使用bluebird套件
`<script src="bluebird.js"></script>`

### 建立一個promise
參考[API - new Promise](http://bluebirdjs.com/docs/api/new-promise.html), 其定義為建立一個promise的實體, 而傳入的resolve和reject參數是bluebird提供的匿名函數, 可提供給日後這個實體來呼叫.

範例1: 建立一個promise實體, 當XHR的error發生時呼叫reject, 而load完成時呼叫resolve.
```
function ajaxGetAsync(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest;
        xhr.addEventListener("error", reject);
        xhr.addEventListener("load", resolve);
        xhr.open("GET", url);
        xhr.send(null);
    });
}
```


### 文件
* [BlueBird Github](https://github.com/petkaantonov/bluebird)
* [BlueBird Website](http://bluebirdjs.com/docs/getting-started.html)
   - [API-Reference](http://bluebirdjs.com/docs/api-reference.html)

### 其他

[RESTFUL測試網站](http://jsonplaceholder.typicode.com/)