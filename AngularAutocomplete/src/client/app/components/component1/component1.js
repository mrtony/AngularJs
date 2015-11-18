//Component1 controller

(function () {
    'use strict';

    angular
        .module('app.component1')
        .controller('Component1', Component1);

    Component1.$inject = ['logger', 'dataservices', 'fakeData']; 

    function Component1(logger, dataservices, fakeData) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Component1';
        vm.users = [];
        vm.countries = fakeData.countries;
        vm.contacts = fakeData.getContacts();
        activate();

        function activate() {
            console.log(fakeData.countries);
            logger.info('Demo component1 controller is activated!');
            dataservices.getRemoteData()
            .then(function(data) {
               vm.users = data.data; 
            });
         }
    }
})();
