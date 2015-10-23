//Component1 controller

(function () {
    'use strict';

    angular
        .module('app')
        .controller('Component1', Component1);

    Component1.$inject = ['toastr', '$window', '$timeout']; 

    function Component1(toastr, $window, $timeout) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Component1';

        vm.tabs = [
            { title:'Dynamic Title 1', content:'Dynamic content 1' },
            { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
        ];
        
        vm.alertMe = function() {
            $timeout(function() {
                $window.alert('You\'ve selected the alert tab!');
            });
        };
  
        activate();

        function activate() {
            toastr.info('Demo component1 controller is activated!');
         }
    }
})();
