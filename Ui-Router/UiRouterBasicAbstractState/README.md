Ui-router 的Abstract State
===
實驗[ui-router](https://github.com/angular-ui/ui-router)的Abstract State是如何運作的.

### Nested States and Nested Views學習

#### Nested的表示法
1. 使用`.`的方式
```
$stateProvider
  .state('contacts', {})
  .state('contacts.list', {});
```
2. 使用parent
```
$stateProvider
    .state("dashboard", { url: "/dashboard", templateUrl: "templates/dashboard.html" })
        .state("overall", { parent:"dashboard", url: "/overall", templateUrl: "templates/overall.html" })
        .state("customers", { parent:"dashboard", url: "/customers", templateUrl: "templates/customers.html" })
```

#### Nested的繼承
只要有使用nested state, 切換到child state時, parent state同時也會被執行. **但若是同一個parent的child state切換時, parent state就不會被執行**.

另外有2個項目會繼承:
1. resolve : 若parent有resolve, 那它的內容在child是可以使用的.
2. custom data

### Abstract State
使用abstract state時有幾個要注意的:
1. 無法切換到該state的.
2. child state會加上abstract state的url當成前置
3. 一定要有一個`<ui-view/>`給child state當容器.

### 官方資源

* [Nested States and Nested Views](https://github.com/angular-ui/ui-router/wiki/Nested-States-and-Nested-Views)

### 其它資源
* [Video - ui-router Named Views](https://egghead.io/lessons/angularjs-ui-router-named-views)
* [AngularJS Routing Using UI-Router](https://scotch.io/tutorials/angular-routing-using-ui-router)
* [ui-router - 巢狀頁面](http://ithelp.ithome.com.tw/question/10159294?tag=rss.qu)
* [Seeking clarification of best practice for deep nesting](https://github.com/angular-ui/ui-router/issues/130)
* [Nested Views, Routing, And Deep Linking With AngularJS](http://www.bennadel.com/blog/2441-nested-views-routing-and-deep-linking-with-angularjs.htm)
* [The basics of using ui-router with AngularJS](http://joelhooks.com/blog/2013/07/22/the-basics-of-using-ui-router-with-angularjs/)