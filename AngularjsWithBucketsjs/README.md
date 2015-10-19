# 測試Angularjs + Buckets套件
Buckets是一個購物車的資料結構函式庫.

### 加入buckets套件
`bower install bucketsjs --save-dev`

### 使用buckets套件
`<script src="buckets.js"></script>`

### 範例1: 建立一個buckets的dictionary

```
function testDictionary() {
    var myBuckets = new buckets.Dictionary(function(key) {
        return key.name;
    });
    
    if (myBuckets.containsKey({name: 'test'}))
    return;

    //儲存資料
    myBuckets.set("Test", [{total: 100}, {total: 200}]);
    
    //
    toastr.info(myBuckets.isEmpty()? "購物車是空的" : "購物車有物品");
    
    //取得資料
    var data = myBuckets.values();
    angular.forEach(data[0], function(value) {
        console.log(value.total);
    });
    
    //清除特定的key
    myBuckets.remove("Test");
    toastr.info(myBuckets.isEmpty()? "購物車是空的" : "購物車有物品");
    
    //清除清除所有的keys
    myBuckets.clear();
    toastr.info(myBuckets.isEmpty()? "購物車是空的" : "購物車有物品");
    
    console.log("myBuckets is created!");
}
```
會先去new一個buckets物件, 然後用它的containsKey檢查是否已經存在我們已加入的key了, 如果沒有則會呼叫callback並回傳key並建立該key到dictionay中.

並實驗了幾個API:
* set(): 將資料加入buckets
* values(): 取得buckets的資料
* remove(): 移除dictionary中特定的key
* isEmpty(): 檢查dictionary是否為空的
* clear(): 清除整個dictionary.

### 文件
* [Buckets Github](https://github.com/mauriciosantos/Buckets-JS)
   - [Object buckets.Dictionary](https://rawgit.com/mauriciosantos/buckets/master/doc/symbols/buckets.Dictionary.html#.isEmpty)
