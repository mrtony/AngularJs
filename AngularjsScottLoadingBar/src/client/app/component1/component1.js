//Component1 controller

(function () {
    'use strict';

    angular
        .module('app')
        .controller('Component1', Component1);

    Component1.$inject = ['toastr', 'dataServices']; 

    function Component1(toastr, dataServices) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Component1';
        vm.getData = getData;
        vm.data = [];

        activate();

        function activate() {
            toastr.info('Demo component1 controller is activated!');
         }
         
         function getData() {
             vm.data = [];
             dataServices.getData()
             .then(function(response) {
                 vm.data = response.data;
                 toastr.info("取得資料成功!!");
                 console.log(response.data);
             })
             .catch(function(error) {
                 toastr.error("取得資料失敗!!");
                 console.log(error);
             });
         }
    }
})();
