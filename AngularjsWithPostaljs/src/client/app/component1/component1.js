//Component1 controller

(function () {
    'use strict';

    angular
        .module('app')
        .controller('Component1', Component1);

    Component1.$inject = ['toastr', '$scope', 'factory', '$timeout']; 

    function Component1(toastr, $scope, factory, $timeout) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Component1';

        activate();

        function activate() {
            toastr.info('Demo component1 controller is activated!');
            //testSimpleSubPub();
            testSimpleTimeoutSubPub();
            //testSubPubByTimeout();
         }
         
         function testSimpleSubPub() {
            // This gets you a handle to the default postal channel...
            // For grins, you can get a named channel instead like this:
            // var channel = postal.channel( 'DoctorWho' );
            var channel = postal.channel();
            // subscribe to 'name.change' topics
            var subscription = channel.subscribe( "name.change", function( data ) {
                vm.title = "Trigger by publisher!!"
            } );
            // And someone publishes a name change:
            channel.publish( "name.change", { name: "Dr. Who" } );
            // To unsubscribe, you:
            subscription.unsubscribe();
         }
         
         function testSimpleTimeoutSubPub() {
            // This gets you a handle to the default postal channel...
            // For grins, you can get a named channel instead like this:
            // var channel = postal.channel( 'DoctorWho' );
            var channel = postal.channel();
            // subscribe to 'name.change' topics
            var subscription = channel.subscribe( "name.change", function( data ) {
                vm.title = "Trigger by publisher!!"
            } );
            
            // And someone publishes a name change:            
            $timeout(function(){   
                // And someone publishes a name change:
                channel.publish( "name.change", { name: "Dr. Who" } );
                // To unsubscribe, you:
                subscription.unsubscribe();

            }, 1*1000);             
         }
 
         function testSubPubByTimeout() {
             factory.basicTestWithQ();
            // This gets you a handle to the default postal channel...
            // For grins, you can get a named channel instead like this:
            // var channel = postal.channel( 'DoctorWho' );
            var channel = postal.channel();
            // subscribe to 'name.change' topics
            var subscription = channel.subscribe( "name.change", function( data ) {
                vm.title = "Trigger by publisher!!";
            } );
         }
    }
})();
