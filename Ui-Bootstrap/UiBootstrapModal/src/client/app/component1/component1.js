//Component1 controller

(function () {
    'use strict';

    angular
        .module('app')
        .controller('Component1', Component1);

    Component1.$inject = ['toastr', '_', 'Employee', 'ConfirmPromotion']; 

    function Component1(toastr, _, Employee, ConfirmPromotion) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = '使用UI Bootstrap的Modal來決定要promote的員工';

        vm.employees = [
            new Employee("Scott", "Allen", 1),
            new Employee("Alex", "Lifeson", 4),
            new Employee("Lawrence P.", "Waterhouse", 4),
            new Employee("Zoey", "Thibodale", 2),
            new Employee("Glory", "Altimira", 3)
        ];

        vm.promote = promote;
        
        activate();

        function activate() {
            toastr.info('Demo component1 controller is activated!');
        }
        
        function removeEmployee(employee) {
            _.each(vm.employees, function(data, idx) { 
                if (_.isEqual(data, employee)) {
                    vm.employees.splice(idx, 1);
                    toastr.error(employee.lastName + " promoted!");
                }
            });            
        }
        
        function promote(employee) {
            ConfirmPromotion(employee).then(removeEmployee);
        }
    }
})();
