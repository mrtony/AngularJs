/* global vm */
describe('Filters', function(){ //describe your object type
    beforeEach(module('MyApp')); //load module
    
    describe('reverse',function(){ //describe your app name
    
        var reverse;    
        beforeEach(inject(function($filter){ //initialize your filter
            reverse = $filter('reverse',{});
        }));
        
        it('Should reverse a string', function(){  //write tests
            expect(reverse('rahil')).toBe('lihar'); //pass
            expect(reverse('don')).toBe('nod'); //pass
            //expect(reverse('jam')).toBe('oops'); // this test should fail
        }); 
    
    });
    
});

describe('when testing karma', function (){
    it('should report a successful test', function (){
    expect(true).toBeTruthy();
    });
});

describe('calculatorEx1', function () {
    it('1 + 1 should equal 2', function() {
        expect(1 + 1).toBe(2);
    });
});

describe('calculator controller', function () {

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
var prettier = angular.mock.dump(vm);
    console.log(prettier);
            expect(vm.z).toBe(3);
        }); 
    });
});