Bootstrp + UI-Router設計版面
===
實驗Bootstrp + UI-Router設計版面.

### 範例項目
1. 將header, content, footer切割出來
2. 加入tabs (ui-bootstrap)
3. tabs的每個子頁都有view, controller

### 疑難雜症
* 想要得到full with的row要怎麼做?
找到[Bootstrap 3 Tips and Tricks You Might Not Know](https://scotch.io/bar-talk/bootstrap-3-tips-and-tricks-you-might-not-know)有解答. 作者說有2種解決方式:
1. 使用`container-fluid`. 但他認為用這個方式不好
2. 不要用`container`. 也就是說不要用它去包row, 也不會影響grid的運作.

* 四格固定要怎麼設計?
使用`col-xs-6`作4個grid.


### 其它資源
* [Bootstrap 3 Tips and Tricks You Might Not Know](https://scotch.io/bar-talk/bootstrap-3-tips-and-tricks-you-might-not-know)