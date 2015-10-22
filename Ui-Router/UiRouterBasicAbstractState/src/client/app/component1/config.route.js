(function() {

    angular
        .module('app.component1')
        .config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
			//$urlRouterProvider.otherwise('/demo1');
			
            $stateProvider
                .state('base', {
                    //url: '/',
                    abstract: true,
                    templateUrl: 'app/layout/shell.html'
                })
                .state('demo1', {
                    //parent: 'base',
                    url:'/demo1',
                    templateUrl: 'app/component1/component1.html'
                })
                .state('demo2', {
                    parent: 'base',
                    url:'/demo2',
                    templateUrl: 'app/component1/component2.html'
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


