Angularjs UI-Bootstrap套件範例
===

1. [UI Bootstrap](https://angular-ui.github.io/bootstrap/)
2. [Bootstrap4](http://v4-alpha.getbootstrap.com/)

# 升級bootstrap4
搭配bootstrap3使用都沒有問題, 但搭配bootstrap4後就有些元件開始出現問題.

### Tabs (ui.bootstrap.tabs)
套用b4後, tabs會跑掉, 要做調整. 主要是li要套`nav-item`, 而`active`和`disabled`要套在`<a>`中. 需要修改`ui-bootstrap-tpls.js`中`template/tabs/tab.html`的範本.

[Bootstrap4 tabs介紹](http://v4-alpha.getbootstrap.com/components/navs/#tabs)

修改後(bootstrap4)
```
bootstrap4
angular.module("template/tabs/tab.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/tabs/tab.html",
    "<li class=\"nav-item\">\n" +
    "  <a href ng-click=\"select()\" class=\"nav-link\" ng-class=\"{active: active, disabled: disabled}\" uib-tab-heading-transclude>{{heading}}</a>\n" +
    "</li>\n" +
    "");
}]);
```

修改前(bootstrap3)
```
//bootstrap3
angular.module("template/tabs/tab.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/tabs/tab.html",
    "<li ng-class=\"{active: active, disabled: disabled}\">\n" +
    "  <a href ng-click=\"select()\" uib-tab-heading-transclude>{{heading}}</a>\n" +
    "</li>\n" +
    "");
}]);
```
