UI Bootstrap Modal使用範例
===
練習UI Bootstrap的Modal使用.

### 安裝
```
npm install
bower install
bower install angular-bootstrap --save-dev
```

### 掛載
```
<script src="path/angular-bootstrap/ui-bootstrap-tpls.js"></script>
angular.module('myModule', ['ui.bootstrap']);
```

### 範例
以`modal`功能來對Employee作promote, 完成promote後將該筆資料自陣列中刪除.
1. 建立一個Employee的value, 可以用來實體化
2. 建立controller, 用來作刪除,promote
3. 建立factory用來包裝`modal`, 並自建controller及template用來顯示`modal`內容 

若是都順利的下載套件到本地端, 就可以啟動本地的伺服器了.
```
gulp serve-dev
```

