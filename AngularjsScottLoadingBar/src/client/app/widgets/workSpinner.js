(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('workSpinner', workSpinner);

    workSpinner.$inject = ['requestCounter'];
    
    function workSpinner (requestCounter) {
        // Usage:
        //     <directive></directive>
        // Creates:
        // 
        var directive = {
            restrict: "EAC",
            transclude: true,
            scope: {},
            template: "<ng-transclude ng-show='requestCount'></ng-transclude>",
            link: link
        };
        return directive;

        function link(scope, element, attrs) {
            console.log("work spinner");
            scope.$watch(function () {
                return requestCounter.getRequestCount();
            }, function(requestCount) {
                scope.requestCount = requestCount;
            });
        }
    }

})();