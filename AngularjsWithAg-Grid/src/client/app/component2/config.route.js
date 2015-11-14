(function() {

    angular
        .module('app.component2')
        .config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
			$urlRouterProvider.otherwise('/home');
			
            $stateProvider
                .state('demo2', {
                    url:'/demo2',
                    controller: 'Component2',
                    controllerAs: 'vm',
                    templateUrl: 'app/component2/component2.html'
                })
        }]);
}());



