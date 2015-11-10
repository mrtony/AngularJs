Angularjs with amCharts
===
用途為開發較為複雜的HTML5+Angularjs網站使用. 包含的套件如下:
環境套件
* nodejs
* bower
* gulp

函式庫
* Angularjs
* Angular ui-router
* Bootstrap4
* font-awesome
* lodash
* moment
* numeral
* toastr
* ui-bootstrap
* ui-router
* amstock3

## 範本示範內容
1. 專案架構
2. 使用ui-router的view規劃SPA
3. 透過promise取得遠端資料
4. 使用amChart畫chart及stockChart

---
# 安裝及載入

### 安裝amStock及angular-amchart
1. amStock包含了amChart及amStock
```
bower install amstock3 --save-dev
```

2. amCharts-Angular
```
bower install amcharts-angular --save
```
但因為這個directive只有做amChart, 我自己將它拿來改, 所以之後要使用自己改的函式庫。

### 引入amStock
```
<link rel="stylesheet" href="/bower_components/amstock3/amcharts/style.css" type="text/css">
<script src="./bower_components/amstock3/amcharts/amcharts.js"></script>
<script src="./bower_components/amstock3/amcharts/serial.js"></script>
<script src="./bower_components/amstock3/amcharts/amstock.js"></script>
```

---
# 畫出第一個價量圖
參考[DEMO-Multiple Data Sets](http://www.amcharts.com/demos/multiple-data-sets/)用amStock畫出第一個圖.

### 重點
1. 如果要畫出以小時為單位的圖, categoryAxesSettings的minPeriod一定要設定。 `hh`表示最小單位為1小時. (Specifies the shortest period of your data. fff - millisecond, ss - second, mm - minute, hh - hour, DD - day, MM - month, YYYY - year.)
, 也可以用`2hh`代表2小時為最小單位.
```
categoryAxesSettings: {
	minPeriod: 'hh'
}
```

2. 若要全部顯示不壓縮所有資料(預設為150, 只要資料超過150點就會壓縮圖)
```
categoryAxesSettings: {
	maxSeries: 0
}
```

### 相關資源
