(function() {

    angular
        .module('app.component1')
        .config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
			$urlRouterProvider.otherwise('/base');
			
            $stateProvider
                .state('base', {
                    url: '/base',
                    views: {
                        // absolute names format
                        'header@': {templateUrl: 'app/component1/header.html'},
                        'content_wrapper@': {templateUrl: 'app/component1/content.html', controller: 'Component1', controllerAs: 'vm'},
                        'footer@': {templateUrl: 'app/component1/footer.html'}
                        
                        // 'header': {templateUrl: 'app/component1/header.html'},
                        // 'sidebar': {templateUrl: 'app/component1/sidebar.html'},
                        // 'content': {templateUrl: 'app/component1/content.html'},
                        // 'footer': {templateUrl: 'app/component1/footer.html'}
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


