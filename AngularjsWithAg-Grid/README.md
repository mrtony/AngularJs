測試Angularjs1.x + Ag-Grid套件
===

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

---
# 官方各功能說明

## Cell Styleing
共有4個不同的方式
- cellClass
- cellClassRules
- cellStyle: 回傳style.
- cellRenderer : 回傳的內容直接會顯示在cell中

### Cell Class
可同時回傳2個以上的class給cell, 也可單一, 也可用條件判斷.

返回值
- ['class1', 'class2', ...]
- class1


靜態
```
{headerName: "Email", field: "Email", cellClass: function(params) { return ['my-class-1','my-class-2']; }}

```

可動態條件判斷
```
{headerName: "Email", field: "Email", cellClass: function(params) { return ['info','error-block']; }}
```
### Cell Rules
設定好規則, 只要符合某個規則就會回傳該css. 
```
{headerName: "Country", field: "Country",             
cellClassRules: {
        'error': function(params) { return params.value === 'Grenada'},
        'info': function(params) { return params.value === 'Zambia'}
    }
}
```

### Cell Styling
提供幾種方式來設定`cell style`, 是`style`喔, 所以不是給css.

1. 靜態設定
```
cellStyle: {color: 'red', 'background-color': 'green'}
```

2. 動態設定
因為每次refresh時(有資料更新時), 若是使用callback方式時, `cellStyle`會被呼叫. 比如說需要依資料動態設定cell的顏色, 就可以利用這個方式：
```
cellStyle: function(params) {
                if (params.value==='Police') {
                    return {color: 'red', backgroundColor: 'green'};;
                } else {
                    return null;
                }
            }
```

### Cell Render
回傳的內容直接會顯示在cell中, 所以可以包含很複雜的HTML. 

1. 只要cell的值是Police, 顯示成POLICE
```
    cellRenderer: function(params) {
        if (params.value=='Police') {
            return 'POLICE';
        } else {
            return params.value.toUpperCase();
        }
    }
```

2. 包含樣式
```
    cellRenderer: function(params) {
    if (params.value.startsWith('A')) {
        return '<span style="color:red;">▲</span>' + params.value.toUpperCase();
    } else {
        return params.value.toLowerCase();
    }
```

## Context
Context是有點奇怪的東西，但卻是好用的。 我用官方的範例來說明何謂context.

此範例主要是利用context來與外部資料互動, 在column define中，利用`ctx`關鍵字來呼叫用使用在`gridOptions`中所定義的`context`元素。 整個行為大致如下： 第4欄皫header是定
義在context中, 預設會顯示`EUR`，當切換EUR到USD後，gridOptions.context.reportingCurrency的值會被變更，並呼叫`currencyChanged()`並執行`refreshView()`及`refreshHeader()`。
，然後會觸發`cellRenderer`被執行，並重新以選擇的幣值來計算後顯示出來。

HTML
```
<select ng-model="gridOptions.context.reportingCurrency"
        ng-options="currency for currency in currencies"
        ng-change="currencyChanged()">
</select>
```

JS
```
    var columnDefs = [
        {headerName: "Product", field: "product", width: 150},
        {headerName: "Currency", field: "currency", width: 150},
        {headerName: "Price Local", field: "price", width: 150},
        {headerName: "Report Price", width: 150,
            cellRenderer: reportingCurrencyCellRenderer,
            headerValueGetter: 'ctx.reportingCurrency'}
    ];


    // in the future, change this to a value getter
    function reportingCurrencyCellRenderer(params) {
        var fxRateSet = exchangeRates[params.context.reportingCurrency];
        var fxRate = fxRateSet[params.data.currency];
        if (fxRate) {
            return params.data.price * fxRate;
        } else {
            return params.data.price;
        }
    }

    $scope.currencyChanged = function() {
        $scope.gridOptions.api.refreshView();
        $scope.gridOptions.api.refreshHeader();
    };

    $scope.gridOptions = {
        context: {
            reportingCurrency: 'EUR'
        },
        columnDefs: columnDefs,
        rowData: data,
        forPrint: true
    };
```

## Refresh - 更新
有三種更新方式
- refreshView()
- refreshRows()
- refreshCells()

### refreshView()
會更新整個整個grid. 舉例來說, 我們使用context的方式連結外部輸入, 當外部資料變更需要重新計算多個cell值時, 就需要用此函數做redraw, 以重新執行`cellRender`, `getRowClass`等功能去
做redraw. (呼叫`setRowData()`也會執行`refreshView()`)

### refreshRows(nodes)
通當是用來對要更新的rows做refresh. 做法是這樣的: 找出已經在grid中`id=1, id=48`的2個row, 將新的資料填入後就會對這2行做refresh的動作。
```
function updateExistingRow() {
    var updatedNodes = [];
    vm.gridOptions.api.forEachNode( function(node) {
        if (node.data.Id === 1 || node.data.Id === 48) {
            // node.data.name = makeid();
            node.data.Name = 'xxx';
            node.data.isNew = true;
            updatedNodes.push(node);
        }
    });
    vm.gridOptions.api.refreshRows(updatedNodes);
}
```
### refreshCells(rowNodes, colIds)
參數1是傳入要更新的row有幾個, 跟refreshRows()的做法相同。 參數2是指出要更新的column id, 也就是fild, 就會針對該row的cell做更新，而不會對全部的cell做更新。可以一次用陣列的方式傳入
多個column. 同樣的, 一旦cell被更新，cellRender, cellRenderRule等會被重新執行。

```
gridOptions.api.refreshCells(updatedNodes, ['Name', 'Tel']);


```�多個column

---
# 建立第一個grid
<p data-height="301" data-theme-id="14742" data-slug-hash="PPyNaB" data-default-tab="result" data-user="mrtony" class='codepen'>See the Pen <a href='http://codepen.io/mrtony/pen/PPyNaB/'>ag-grid - create a table</a> by Tony (<a href='http://codepen.io/mrtony'>@mrtony</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async="async" src="//assets.codepen.io/assets/embed/ei.js"></script>

### Snippet

* 如何在更新row內容時可以閃一下row?
使用`getRowClass`的callback來回傳動態的css. 而且在變更完成後將它移除.

```
getRowClass: function(params) {
                console.log(params);
                if (params.data.isNew) {
                    params.data.isNew = false;
                    return 'flash';
                } else {
                    return '';
                }
            }
            
function updateExistingRow() {
    var updatedNodes = [];
    vm.gridOptions.api.forEachNode( function(node) {
        if (node.data.Id === 1) {
            node.data.name = makeid();
            node.data.isNew = true;
            updatedNodes.push(node);
        }
    });
    vm.gridOptions.api.refreshRows(updatedNodes);
}

```

* 如何利用valueGetter利用表格中的數個值或數值加總後指派給另一個欄位?
比如說股票`漲幅=(成交價-昨收價)/昨收價`, 那`漲幅`欄位不需要提供, 利用`valueGetter`可以做到.
```
{headerName: "chg", valueGetter: computChgValueGetter}    
    
function computChgValueGetter(params) {
        return (params.data.deal-params.data.refe)/params.data.refe;
}
```

* 如何對cell內容作動態的更新?
利用[Cell Rendering](http://www.ag-grid.com/angular-grid-cell-rendering/index.php)就可以動態的變更內容及樣式. 它回傳的內容會取代cell的內容. 也可以加樣式.

以下是判斷`Name`的cell只要是A開頭的, 就將傳回值加上紅色箭頭並將名字變成大寫, 否則傳回小寫的名字.
```
{headerName: "Name", field: "Name", suppressSorting: true, suppressMenu: true, 
    cellRenderer: function(params) {
    if (params.value.startsWith('A')) {
        return '<span style="color:red;">▲</span>' + params.value.toUpperCase();
    } else {
        return params.value.toLowerCase();
    }
}}
```

* 如何對grid的header作格式化?
套件開發者也認為用[Header Rendering](http://www.ag-grid.com/angular-grid-header-rendering/index.php)最好. 他在這個討論串[Best way to style headers](http://www.ag-grid.com/forum/showthread.php?tid=2474&pid=3785)也有提到.

* 更新grid內容
執行gridOptions.api.refreshView()更新後
   * onModelUpdated: 不會發生
   
* 如何新增資料而不蓋掉原資料?
參考[Dynamically add rows to grid, but not refreshing](http://www.ag-grid.com/forum/showthread.php?tid=2339)和[calling onNewRows vs refreshView](http://www.ag-grid.com/forum/showthread.php?tid=2558), 作者說用`onNewRow()`可以新增row到原grid更完成refresh().

* 為何在沒有資料時整個表格內容縮排了? <br/>
要將`height`設為固定大小即可.

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