(function() {

    angular
        .module('app.component3')
        .config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
			$urlRouterProvider.otherwise('/home');
			
            $stateProvider
                .state('demo3', {
                    url:'/demo3',
                    controller: 'Component3',
                    controllerAs: 'vm',
                    templateUrl: 'app/component3/component3.html'
                })
        }]);
}());



