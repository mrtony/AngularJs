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
                        'content_wrapper@': {templateUrl: 'app/componentAltOne/altone.html'},
                        'sub-one@base.alt-one': {templateUrl: 'app/componentAltOne/subone/subone.html', controller: 'Subone', controllerAs: 'vm'},
                        'sub-two@base.alt-one': {templateUrl: 'app/componentAltOne/subtwo.html'},
                        'sub-mid@base.alt-one': {templateUrl: 'app/componentAltOne/submid.html'},
                        'sub-three@base.alt-one': {templateUrl: 'app/componentAltOne/subthree.html'},
                        'sub-four@base.alt-one': {templateUrl: 'app/componentAltOne/subfour/subfour.html', controller: 'Subfour', controllerAs: 'vm'}
                    }
                })
                .state('base.alt-one.subfour-1', {
                    templateUrl: 'app/componentAltOne/subfour/subfour-1.html',
                    controller: 'Subfour_1',
                    controllerAs: 'vm'
                })
                .state('base.alt-one.subfour-2', {
                    templateUrl: 'app/componentAltOne/subfour/subfour-2.html',
                    controller: 'Subfour_2',
                    controllerAs: 'vm'
                });;
                
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


