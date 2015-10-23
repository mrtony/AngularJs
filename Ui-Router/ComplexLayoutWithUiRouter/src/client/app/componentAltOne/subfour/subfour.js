//Component1 controller

(function () {
    'use strict';

    angular
        .module('app.altone.subfour')
        .controller('Subfour', Subfour);

    Subfour.$inject = ['toastr', '$window', '$timeout', '$state']; 

    function Subfour(toastr, $window, $timeout, $state) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Sub Four';

        vm.tabs = [
            { title:'成交', content:'Dynamic content 1' , route: 'base.alt-one.subfour-1'},
            { title:'庫存', content:'Dynamic content 2' , route: 'base.alt-one.subfour-2' }
        ];
        
        vm.alertMe = function(route) {
            $state.go(route);
            // $timeout(function() {
            //     $window.alert('You\'ve selected the alert tab!');
            // });
        };
  
        activate();

        function activate() {
            toastr.info('Demo component1 controller is activated!');
         }
    }
})();
