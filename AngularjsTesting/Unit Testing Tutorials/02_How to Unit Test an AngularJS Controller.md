How to Unit Test an AngularJS Controller
===
在練習完`Getting started with Unit Testing for AngularJS`後，要開始測試angular的controller了。

我們要做的事情有2樣：
1. 使用者有2個欄位可輸入，並且會顯示2個欄位輸入的數值相加的結果
2. 建立測試內容

# 建立controller
```
angular.module('calculatorApp', [])
.controller('CalculatorController', function CalculatorController($scope) {
  $scope.z = 0;
  $scope.sum = function() {
    $scope.z = $scope.x + $scope.y;
  };
});
```

# 建立測試
```
describe('calculator', function () {

    beforeEach(angular.mock.module('calculatorApp'));

    var $controller;

    beforeEach(angular.mock.inject(function(_$controller_){
      $controller = _$controller_;
    }));

    describe('sum', function () {
        it('1 + 1 should equal 2', function () {
            var $scope = {};
            var controller = $controller('CalculatorController', { $scope: $scope });
            $scope.x = 1;
            $scope.y = 2;
            $scope.sum();
            expect($scope.z).toBe(3);
        }); 
    });

});
```

# 使用ngMock
[ngMock](https://docs.angularjs.org/api/ngMock)是angularjs提供的測試函式庫。

這裡用來註冊`calculatorApp`模組. 範例的宣告方式可以讓這個測試群組可以使用此模組中的所有資源。
```
beforeEach(angular.mock.module('calculatorApp'));
```

然後注入controller
```
beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
}));
```

取得controller實體，且時並取得注入該controller的$scope
```
var controller = $controller('CalculatorController', { $scope: $scope });
```

note: 若還有注入其他的，應可用類似方式取得: ``{$scope: $scope, $http: $http}`

也可以呼叫函數
```
$scope.sum();
```

# ControllerAs
若是controller用`controllerAs`時要怎麼做測試? 依john papa的作法，在controller中都是用`vm=this`. 其實就是controller自己的實體。
參考[Unit Testing Angular Directives with bindToController
](http://www.markschabacker.com/blog/2015/09/30/bindToController_testing/)的做法，改為以下的程式即可:

```
describe('calculator controllerAs', function () {

    beforeEach(angular.mock.module('calculatorApp'));

    var $controller;

    beforeEach(angular.mock.inject(function(_$controller_){
      $controller = _$controller_;
    }));

    describe('sum', function () {
        it('3 + 6 should equal 9', function () {
            var vm = $controller('CalculatorControllerAs');
            vm.x = 1;
            vm.y = 2;
            vm.sum();
            expect(vm.z).toBe(3);
        }); 
    });
});
```
