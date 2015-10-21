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
        vm.appendRow = appendRow;
        vm.updateRowByModel = updateRowByModel;

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
            toastr.info('Demo component1 controller is activated!');
         }
         
        //-----------------------
        
        function createBasicGrid() {
            vm.gridOptions = basicGridOption;
        }
        
        function appendRow() {
            vm.gridOptions.rowData.push({make: "Audi", model: "Q5", price: 32000});
            vm.gridOptions.api.onNewRows();
        }
        
        function renewData() {
            var nodes = [{make: "Audi", model: "Q5", price: 32000}];
            vm.gridOptions.api.setRowData(nodes);
        }
        
        //找出grid內部的virtual structure中的資料並比對做更新
        function updateRowByModel() {
            // at the end of the update below, this array will
            // have all of the items that we updated
            var updatedNodes = [];
            // look for all the 'Jillian' nodes
            vm.gridOptions.api.forEachNode( function(node) {
                var data = node.data;
                if (data.make == 'Ford') {
                    // we found a Jilly node!!!
                    data.price += 123;
                    updatedNodes.push(node);
                }
            });
            // now tell the grid it needs refresh all these rows
            vm.gridOptions.api.refreshRows(updatedNodes);
        };
    }

})();
