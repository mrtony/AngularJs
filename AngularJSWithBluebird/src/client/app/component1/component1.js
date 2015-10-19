//Component1 controller

(function () {
    'use strict';

    angular
        .module('app')
        .controller('Component1', Component1);

    Component1.$inject = ['$scope', 'toastr', 'factory']; 

    function Component1($scope, toastr, factory) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Component1';
        vm.collection = [
            {id: 1, title: 'test', body: 'test body'}
        ];
        var promise;

        activate();

        function activate() {
            toastr.info('Demo component1 controller is activated!');
            //testNgHttp();
            //testBbPromiseByTimeout();
            //testBbPromiseByHttp();
            //testTimeoutWithQ();
            factory.TaPromise().then(function(message) {
                toastr.info(message);
            });
            factory.TaPromise().then(function(message) {
                toastr.info(message);
            });
            
            testTimeoutWithQAndTaPromise();
            console.log("test controller");
         }
         
         function testBbPromiseByTimeout() {
             factory.bluebirdBasicTest()
             .then(function(data) {
                 vm.collection[0].body = data;
                 $scope.$apply();
                 toastr.info(data);
             })
             .catch(function(errMsg) {
                 toastr.info(errMsg);
             });
         }
         
         function testTimeoutWithQ() {
             factory.basicTestWithQ()
             .then(function(data) {
                 vm.collection[0].body = data;
                 toastr.info(data);
             });
         }
         
         function testTimeoutWithQAndTaPromise() {
             factory.basicTestWithQAndTaPromise()
             .then(function(data) {
                 vm.collection[0].body = data;
                 toastr.info(data);
             });
         }
         
         function testBbPromiseByHttp() {
            factory.bluebirdResolvePromiseTest()
            .then(function(data) {
                vm.collection = data.data;
                toastr.info('Remote data is ready by promise!');
                $scope.$apply();
            })
             .catch(function(errMsg) {
                 toastr.info(errMsg);
             });
         }
         
         function testNgHttp() {
            factory.ngHttpTest()
            .then(function(data) {
                vm.collection = data.data;
            });            
         }
    }
})();
