Ui-router 的Name View
===
實驗[ui-router](https://github.com/angular-ui/ui-router)的Name View是如何運作的.

### Multiple Named Views
若要在一個`ui-view`的template中有多個view, 將`ui-view`加上名稱就可以做到. 因此在state定義中需要加上`view`的屬性.

#### 使用view屬性後變沒有用的屬性
有幾個屬性會變成沒有用:
* templateUrl
* template 
* templateProvider
所以我們可以定義一個parent state來當成這個multi view的畫板.

#### 絕對路徑的Scheme
View Name的scheme的定義為`viewname@statename`. 所以它有幾個組合方式:
1. @ : 指向最上層沒有名稱的`<ui-view/>`
2. @contact : 指向statename=contact中沒有名稱的`<ui-view/>`
3. detail@ : 指向最上層名稱為detail的`<ui-view/>`
4. detail@contact : 指向statename=contact中名稱為detail的`<ui-view/>`

#### 相對路徑的表示式
ui-router的view name亦支援相對路徑, 主要是在state中以字串方式表示, 但只能指向parent state, 無法直接指到root state.
```
$stateProvider
  .state('contacts', {
    // This will get automatically plugged into the unnamed ui-view 
    // of the parent state template. Since this is a top level state, 
    // its parent state template is index.html.
    templateUrl: 'contacts.html'   
  })
  .state('contacts.detail', {
    views: {
        ////////////////////////////////////
        // Relative Targeting             //
        // Targets parent state ui-view's //
        ////////////////////////////////////

        // 指向parent state contact中名稱為detail的ui-view
        "detail" : { },            

        // 指向parent state contact中沒有名稱的ui-view
        "" : { }, 
   }
```

### 官方資源
* [Nested States and Nested Views](https://github.com/angular-ui/ui-router/wiki/Nested-States-and-Nested-Views)

### 其它資源
* [Video - ui-router Named Views](https://egghead.io/lessons/angularjs-ui-router-named-views)
* [AngularJS Routing Using UI-Router](https://scotch.io/tutorials/angular-routing-using-ui-router)
* [ui-router - 巢狀頁面](http://ithelp.ithome.com.tw/question/10159294?tag=rss.qu)
* [Seeking clarification of best practice for deep nesting](https://github.com/angular-ui/ui-router/issues/130)
* [Nested Views, Routing, And Deep Linking With AngularJS](http://www.bennadel.com/blog/2441-nested-views-routing-and-deep-linking-with-angularjs.htm)
* [The basics of using ui-router with AngularJS](http://joelhooks.com/blog/2013/07/22/the-basics-of-using-ui-router-with-angularjs/)