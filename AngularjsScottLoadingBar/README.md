自製loading bar
===
參考Scot Allen的ngPlaybook中的作法, 實作一次在載入頁面時會顯示loading bar, 載完後自動消失.

## 設計原理
利用$http的intercepter, 在載入頁面時(不管是遠端或local載入頁面), 都會觸發http request. 利用這個特點來設計, 只要有載入則增加counter, 載入完成減少counter, 而gif檔在counter=0時就會不顯示(用ng-show=counter).

### workSpinner directive
注入requestCounter, 只要counter=0則gif檔就不顯示(ng-show=counter)

### requestCounter服務
以http intercepter設計, 在載入頁面時(不管是遠端或local載入頁面), 都會觸發http request. 而requestError也都會觸發. 另外也可新增手動方式來作控制, 用promise的then/catch來loading bar.
