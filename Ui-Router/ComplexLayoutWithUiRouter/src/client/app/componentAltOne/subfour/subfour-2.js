(function () {
    'use strict';

    angular
        .module('app.altone.subfour')
        .controller('Subfour_2', Subfour_2);

    Subfour_2.$inject = ['toastr']; 

    function Subfour_2(toastr) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Subfour_2';

        //-----------------------
        var columnDefs = [
            {headerName: "Make", field: "make", suppressSorting: true, suppressMenu: true},
            {headerName: "Model", field: "model", suppressSorting: true, suppressMenu: true},
            {headerName: "Price", field: "price"}
        ];
    
        var rowData = [
            {make: "Audi", model: "Celica", price: 50000},
            {make: "Benz", model: "Mondeo", price: 20000},
            {make: "Toyota", model: "Autis", price: 10000},
            {make: "BMW", model: "Boxter", price: 80000},
            {make: "Nissan", model: "XTrial", price: 100000}
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
            toastr.info('Demo Subfour_2 controller is activated!');
         }
         
        //-----------------------
        
        function createBasicGrid() {
            vm.gridOptions = basicGridOption;
        }        
    }

})();