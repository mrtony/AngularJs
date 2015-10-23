(function () {
    'use strict';

    angular
        .module('app.altone.subfour')
        .controller('Subfour_1', Subfour_1);

    Subfour_1.$inject = ['toastr']; 

    function Subfour_1(toastr) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Subfour_1';

        //-----------------------
        var columnDefs = [
            {headerName: "Make", field: "make", suppressSorting: true, suppressMenu: true},
            {headerName: "Model", field: "model", suppressSorting: true, suppressMenu: true},
            {headerName: "Price", field: "price"}
        ];
    
        var rowData = [
            {make: "Toyota", model: "Celica", price: 35000},
            {make: "Ford", model: "Mondeo", price: 32000},
            {make: "Porsche", model: "Boxter", price: 72000}
        ];
        
        var basicGridOption = {
            columnDefs: columnDefs,
            rowData: rowData,
            enableSorting: true,
            enableFilter: true
        }
        //-----------------------
        activate();

        function activate() {
            createBasicGrid();
            toastr.info('Demo Subfour_1 controller is activated!');
         }
         
        //-----------------------
        
        function createBasicGrid() {
            vm.gridOptions = basicGridOption;
        }        
    }

})();