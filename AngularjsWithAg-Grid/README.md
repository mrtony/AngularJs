# 測試Angularjs1.x + Ag-Grid套件
Ag-Grid是一個grid套件, 同時支援Pure Javascript, AngularJSx.1, AngularJS2.x and WebComponent.

### 加入ag-grid套件
`bower install ag-grid --save-dev`

### 使用ag-grid套件
1. 載入js和css
```
<link rel="stylesheet" type="text/css" href="pathToGrid/ag-grid.css">
<link rel="stylesheet" type="text/css" href="pathToGrid/theme-fresh.css">
<script src="pathToGrid/ag-grid.js"></script>
```

2. 引入module 
```
angular.module("app", ["agGrid"]);
```

要注意的是使用theme. ag-grid支援fresh, dark, blue的theme時, 如果在使用時指定fresh, 那就一定要載入fresh.css, 不然顯示的表格會不好看.

### Snippet

* 如何對grid的header作格式化?
套件開發者也認為用[Header Rendering](http://www.ag-grid.com/angular-grid-header-rendering/index.php)最好. 他在這個討論串[Best way to style headers](http://www.ag-grid.com/forum/showthread.php?tid=2474&pid=3785)也有提到.

* 更新grid內容
執行gridOptions.api.refreshView()更新後
   * onModelUpdated: 不會發生
   
* 如何新增資料而不蓋掉原資料?
參考[Dynamically add rows to grid, but not refreshing](http://www.ag-grid.com/forum/showthread.php?tid=2339)和[calling onNewRows vs refreshView](http://www.ag-grid.com/forum/showthread.php?tid=2558), 作者說用`onNewRow()`可以新增row到原grid更完成refresh().
```
function appendRow() {
    vm.gridOptions.rowData.push({make: "Audi", model: "Q5", price: 32000});
    vm.gridOptions.api.onNewRows();
}
```

* 如何動態寫入rowData
假如資料來源是由遠端提供, 要怎麼動態將資料填入grid中? 使用`setRowData()`就會將目前的資料全部取代.
```
function renewData() {
    var nodes = [{make: "Audi", model: "Q5", price: 32000}];
    vm.gridOptions.api.setRowData(nodes);
}
```


### 文件
* [ag-grid Github](https://github.com/ceolter/ag-grid)
* [ag-grid website](http://www.ag-grid.com/)