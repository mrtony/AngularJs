Angularjs AutoComplete Study
===
用途為study angular auto-complete的功能。 有幾個套件當成學習的參考來源。

* [angucomplete-alt](https://github.com/ghiden/angucomplete-alt) : 看起來算是比較好用?


# 範本示範內容
1. 基本的auto-complete使用

幾個參數說明:
* id: 要獨一無二
* maxlength: 輸入字串的最大長度
* pause: 類似ng-mode的debunce
* selected-object: 可接受2種型態-object, function.
  - object: 在view-controller中的scope物件(也可以vm.object), 所選的項目會放在這個變數中
  - function: callback. 選擇項目後會呼叫此callback
* local-data: 要被搜尋的物件陣列
* search-field: 對應到local-data中的物件的key值。 可搜尋2個以上的field, 要用逗號隔開。如`firstName,surname`. 注意2個field中的逗號不可有空白。
* title-field: 對應到local-data中的物件的key值。可以用來顯示出找出的項目的顯示內容, 可有2個以上的field加起來顯示, 要用逗號隔開。如`firstName,surname`. 注意2個field中的逗號不可有空白。
* minlength: 至少要輸入一個字以上
* input-calss: 輸入框要套用的class
* match-class: 在找到的like項目列表中以游標去選擇時會用的class

```
<div angucomplete-alt id="ex1"
  placeholder="Search countries"
  maxlength="50"
  pause="100"
  selected-object="vm.selectedCountry"
  local-data="vm.countries"
  search-fields="name"
  title-field="name"
  minlength="1"
  input-class="form-control form-control-small"
  match-class="highlight"
  text-no-results="找不到商品"></div>
```


# 問與答
