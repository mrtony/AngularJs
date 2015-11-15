Getting started with Karma for AngularJS Testing
===

可參考這篇如何安裝karma, jasmine, 但還是參考這個專案的readme的安裝方式。

### 使用npm test作測試
在`package.json`中可以指定test的shortcut來執行測試：

```
  "scripts": {
    "test": "./node_modules/karma/bin/karma start"
  }
```

然後只要執行 `npm test` 就會執行測試了。
