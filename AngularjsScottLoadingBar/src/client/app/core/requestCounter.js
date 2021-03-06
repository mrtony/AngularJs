(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('requestCounter', requestCounter);
        
    requestCounter.$inject = ['$q'];

    function requestCounter($q) {
        var requests = 0;

        var request = function(config) {
            requests += 1;
            return $q.when(config);
        };

        var manualRequest = function(count) {
            requests += count;
        };
        
        var requestError = function(error) {
            requests -= 1;
            return $q.reject(error);
        };

        var response = function(response) {
            requests -= 1;
            return $q.when(response);
        };

        var responseError = function(error) {
            requests -= 1;
            return $q.reject(error);
        };

        var getRequestCount = function() {
            return requests;
        };

        return {
            manualRequest: manualRequest,
            request: request,
            response: response,
            requestError: requestError,
            responseError: responseError,
            getRequestCount: getRequestCount
        };
    }
    
    angular
        .module('app.core').config(function($httpProvider) {
            $httpProvider.interceptors.push("requestCounter");
        });
})();