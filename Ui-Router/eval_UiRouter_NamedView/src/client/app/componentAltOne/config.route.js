(function() {

    angular
        .module('app.alt-one')
        .config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
			$urlRouterProvider.otherwise('/base');
			
            $stateProvider
                .state('base.alt-one', {
                    url: '/altone',
                    views: {
                        // absolute names format
                        'content@': {templateUrl: 'app/componentAltOne/altone.html'}
                    }
                });
                
        }]);
}());

    
    // angular
    //     .module('app.component1')
    //     .run(/* @ngInject */ function($rootScope, toastr) {
    //         $rootScope.$on('$stateChangeError',
    //             function(event, toState, toParams, fromState, fromParams, error){
    //                 toastr.error("無法切換到新的state:" + toState.name);
    //                 event.preventDefault();
    //             });
    //             
    //         $rootScope.$on('$stateChangeSuccess',
    //             function (event, toState, toParams, fromState, fromParams) {
    //                 toastr.info("切換到新的state:" + toState.name);
    //                 event.preventDefault();
    //             });
    //     });


// .state('demo', {
//     url:'/home',
//     controller: 'Component1',
//     controllerAs: 'vm',
//     templateUrl: 'app/component1/component1.html'
// })


