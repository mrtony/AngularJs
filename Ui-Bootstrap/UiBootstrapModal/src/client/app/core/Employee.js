(function () {
    'use strict';
        
    angular
        .module('app.core')
        .value('Employee', Employee);
        
    function Employee(firstName, lastName, rating) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.rating = rating;
    };
})();