(function () {
    'use strict';

    angular
        .module('app')
        .factory('ConfirmPromotion', ConfirmPromotion);

    ConfirmPromotion.$inject = ['$uibModal'];

    //
    function ConfirmPromotion($uibModal) {
        return function (employee) {
            var options = {
                templateUrl: 'app/core/confirmPromotion.html',
                controller: function() {
                    this.employee = employee;
                },
                controllerAs: 'model'
            }
            
            return $uibModal.open(options).result;
        }
    }
})();