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
			basicTestWithQ: basicTestWithQ,
            ngHttpTest: ngHttpTest            
        };

        return service;
        
        function basicTestWithQ() {
            $timeout(function(){   
                // This gets you a handle to the default postal channel...
                // For grins, you can get a named channel instead like this:
                // var channel = postal.channel( 'DoctorWho' );
                var channel = postal.channel();

                // And someone publishes a name change:
                channel.publish( "name.change", { name: "Dr. Who" } );
            }, 1*1000);  
		};
        
        function ngHttpTest() {
            return $http.get('http://jsonplaceholder.typicode.com/posts');
		};
    }
})();