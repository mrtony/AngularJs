(function () {
    'use strict';

    angular
        .module('app')
        .factory('factory', factory);

    factory.$inject = ['$http', '$timeout', '$q'];

    function factory($http, $timeout, $q) {
        var m_promise = [];
        var index = 0;
        
        var service = {
            bluebirdResolvePromiseTest: bluebirdResolvePromiseTest,
            bluebirdBasicTest: bluebirdBasicTest,
            basicTestWithQ: basicTestWithQ,
            ngHttpTest: ngHttpTest,
            basicTestWithQAndTaPromise: basicTestWithQAndTaPromise,
            TaQPromise: TaQPromise,
            TaBluebirdPromise : TaBluebirdPromise
        };

        return service;

        function bluebirdResolvePromiseTest() {
			return new Promise(function (resolve, reject)
			{
                resolve($http.get('http://jsonplaceholder.typicode.com/posts'));
			});
		};
        
        function bluebirdBasicTest() {
			return new Promise(function (resolve, reject)
			{
                $timeout(function(){   
                    resolve("this message is returned by bluebird promise");
                }, 1*1000);  
			});
		};
        
        function basicTestWithQ() {
            var defer = $q.defer();
            var promise = defer.promise;

            $timeout(function(){   
                defer.resolve("this message is returned by Q promise");
            }, 1*1000);  

            return promise;
		};
        
        function ngHttpTest() {
            return $http.get('http://jsonplaceholder.typicode.com/posts');
		};
        
        function basicTestWithQAndTaPromise() {
            var defer = $q.defer();
            var promise = defer.promise;

            $timeout(function(){   
                //m_promise[0].resolve("this message is resolved for Ta Promise");
                angular.forEach(m_promise, function(value, key) {
                    value.resolve("this message is resolved for Ta Promise");
                });
                defer.resolve("this message is returned by Q promise");
            }, 1*5000);  

            return promise;
		};
        
        function TaQPromise() {
            return $q(function(resolve, reject) {
                var index = m_promise.length;
                m_promise[index] = {};
                m_promise[index].resolve = resolve;
                m_promise[index].reject = reject;
            });
        } 
        
        function TaBluebirdPromise() {
            var future = {};
			return new Promise(function (resolve, reject)
			{
                var index = m_promise.length;
                m_promise[index] = {};
                m_promise[index].resolve = resolve;
                m_promise[index].reject = reject;
			});

        } 
    }
})();