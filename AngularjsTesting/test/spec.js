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


//Factory
//An Introduction To Unit Testing In AngularJS Applications-http://www.smashingmagazine.com/2014/10/introduction-to-unit-testing-in-angularjs/
//Unit Testing AngularJS Services-http://jbavari.github.io/blog/2014/06/11/unit-testing-angularjs-services/
describe('Factory', function(){ //describe your object type
    beforeEach(angular.mock.module('MyApp'));
    
    var factory;
    
    beforeEach(angular.mock.inject(function(_pki_){
      factory = _pki_;
    }));
    
    describe('pkis', function () {
        it('1 + 1 should equal 2', function () {
            expect(factory.pkis.query.cmd).toEqual('Fetch');
        }); 
    });
    
});

//service
describe('Factory', function(){ //describe your object type
    beforeEach(angular.mock.module('MyApp'));
    
    var service;
    
    beforeEach(angular.mock.inject(function(_pki_){
      service = _pki_;
    }));
    
    describe('pkis', function () {
        it('query cmd should be Fetch', function () {
            var prettier = angular.mock.dump(service);
            console.log(prettier);
            expect(service.pkis.query.cmd).toEqual('Fetch');
        }); 
    });
    
});