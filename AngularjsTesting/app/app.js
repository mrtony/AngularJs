angular.module('MyApp', [])
.filter('reverse',[function(){
    return function(string){
        return string.split('').reverse().join('');
    }
}])

angular.module('calculatorApp', []);

angular.module('calculatorApp').controller('CalculatorController', function CalculatorController($scope) {
  $scope.z = 0;
  $scope.sum = function() {
    $scope.z = $scope.x + $scope.y;
  };
});

angular.module('calculatorApp').controller('CalculatorControllerAs', function CalculatorController() {
  var vm = this;
  vm.z = 0;
  vm.sum = sum;
  
  function sum() {
    vm.z = vm.x + vm.y;
  };
});