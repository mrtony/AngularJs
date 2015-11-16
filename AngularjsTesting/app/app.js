angular.module('MyApp', []);

angular.module('MyApp')
.filter('reverse',[function(){
    return function(string){
        return string.split('').reverse().join('');
    }
}])

angular.module('MyApp')
.factory('pki',[function() {
    var pkis = {
        query: {
            cmd: 'Fetch',
            params: {dwel: 5, _json: 1},
            fields: ['idno', 'pass', 'dwel', '_json']
        },
        apply: {
            cmd: 'Apply',
            params: {_json: 1},
            fields: ['idno', 'pass', 'email', '_json']
        },
        fetch: {
            cmd: 'Fetch',
            params: {_json: 1},
            fields: ['idno', 'pass', '_json']
        }
    }
    
    var service = {
        get pkis() {
            return pkis;
        }
    };
    
    return service;
}])

angular.module('MyApp')
.service('pki',[function() {
    var self = this;
    self.pkis = {
        query: {
            cmd: 'Fetch',
            params: {dwel: 5, _json: 1},
            fields: ['idno', 'pass', 'dwel', '_json']
        },
        apply: {
            cmd: 'Apply',
            params: {_json: 1},
            fields: ['idno', 'pass', 'email', '_json']
        },
        fetch: {
            cmd: 'Fetch',
            params: {_json: 1},
            fields: ['idno', 'pass', '_json']
        }
    }
}])

angular.module('MyApp')
.service('pki',[function() {
    var self = this;
    self.pkis = {
        query: {
            cmd: 'Fetch',
            params: {dwel: 5, _json: 1},
            fields: ['idno', 'pass', 'dwel', '_json']
        },
        apply: {
            cmd: 'Apply',
            params: {_json: 1},
            fields: ['idno', 'pass', 'email', '_json']
        },
        fetch: {
            cmd: 'Fetch',
            params: {_json: 1},
            fields: ['idno', 'pass', '_json']
        }
    }
}]);


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