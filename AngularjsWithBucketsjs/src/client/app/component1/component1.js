//Component1 controller

(function () {
    'use strict';

    angular
        .module('app')
        .controller('Component1', Component1);

    Component1.$inject = ['toastr']; 

    function Component1(toastr) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Component1';

        activate();

        function activate() {
            toastr.info('Demo component1 controller is activated!');
            testDictionary();
         }
         
         function testDictionary() {
             var myBuckets = new buckets.Dictionary(function(key) {
                 return key.name;
             });
             
             if (myBuckets.containsKey({name: 'test'}))
                return;

             //儲存資料
             myBuckets.set("Test", [{total: 100}, {total: 200}]);
             
             //
             toastr.info(myBuckets.isEmpty()? "購物車是空的" : "購物車有物品");
             
             //取得資料
             var data = myBuckets.values();
             angular.forEach(data[0], function(value) {
                 console.log(value.total);
             });
             
             //清除特定的key
             myBuckets.remove("Test");
             toastr.info(myBuckets.isEmpty()? "購物車是空的" : "購物車有物品");
             
             //清除清除所有的keys
             myBuckets.clear();
             toastr.info(myBuckets.isEmpty()? "購物車是空的" : "購物車有物品");
             
             console.log("myBuckets is created!");
         }
    }
})();
