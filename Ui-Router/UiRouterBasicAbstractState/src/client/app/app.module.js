/**
 * Created by tony on 2015/3/17.
 */
(function() {
    'use strict';

    angular.module('app', [
        /*
         * Everybody has access to these.
         * We could place these under every feature area,
         * but this is easier to maintain.
         */
        'app.core',

        /*
         * Feature areas
         */
        'app.component1'
    ]);

    angular
        .module('app')
        .run(/* @ngInject */ function($rootScope, toastr) {
            $rootScope.$on('$stateChangeError',
                function(event, toState, toParams, fromState, fromParams, error){
                    toastr.error("無法切換到新的state:" + toState.name);
                    event.preventDefault();
                });
                
            $rootScope.$on('$stateChangeSuccess',
                function (event, toState, toParams, fromState, fromParams) {
                    toastr.info("切換到新的state:" + toState.name);
                    event.preventDefault();
                });
        });
})();