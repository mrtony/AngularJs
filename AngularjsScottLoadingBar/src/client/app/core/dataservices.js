(function () {
    'use strict';

    angular
        .module('app')
        .factory('dataServices', dataServices);

    dataServices.$inject = ['$http', '$timeout', '$q'];

    function dataServices($http, $timeout, $q) {        
        var service = {
            getData: getData
        };

        return service;
        
        function getData() {
            return $http.get('http://jsonplaceholder.typicode.com/posts');
        }
 
    }
})();