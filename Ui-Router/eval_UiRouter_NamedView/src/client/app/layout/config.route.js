(function() {

    angular
        .module('app.layout')
        .config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
			$urlRouterProvider.otherwise('/home');
			
            $stateProvider
                .state('canvas', {
                    abstract: true,
                    templateUrl: 'app/component1/component1.html'
                })
        }]);
}());



