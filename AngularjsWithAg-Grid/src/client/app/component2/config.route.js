(function() {

    angular
        .module('app.component1')
        .config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
			$urlRouterProvider.otherwise('/home');
			
            $stateProvider
                .state('demo2', {
                    url:'/advgrid',
                    controller: 'Component2',
                    controllerAs: 'vm',
                    templateUrl: 'app/component2/component2.html'
                })
        }]);
}());



