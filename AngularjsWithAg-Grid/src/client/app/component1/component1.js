//Component1 controller

(function () {
    'use strict';

    angular
        .module('app.component1')
        .controller('Component1', Component1);

    Component1.$inject = ['toastr', 'fakeData']; 

    function Component1(toastr, fakeData) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Component1';
        vm.appendRow = appendRow;
        vm.updateRowByModel = updateRowByModel;
        vm.updateExistingRow = updateExistingRow;
        vm.appendDataIndex = 50;

        //-----------------------
        var columnDefs = [
            {headerName: "Id", field: "Id"},            
            {headerName: "Name", field: "Name", suppressSorting: true, suppressMenu: true
                ,cellClass: function(params) {
                    console.log(vm.appendDataIndex);
                    return 'flash';
                    // if (params.value==='xxx') {
                    //     return 'flash';
                    // } else {
                    //     return null;
                    // }
                }
                // ,cellRenderer: function(params) {
                //     console.log(params);
                //     // if (params.value.startsWith('A'))
                //     if (params.value==='xxx') {
                //         return params.value.toUpperCase();
                //         // return '<span style="color:red;">▲</span>' + params.value.toUpperCase();
                //     } else {
                //         return params.value.toLowerCase();
                //     }
                // }
            }
            ,{headerName: "Tel", field: "Tel", suppressSorting: true, suppressMenu: true},
            {headerName: "Country", field: "Country",             
            cellClassRules: {
                    'error': function(params) { return params.value === 'Grenada'},
                    'info': function(params) { return params.value === 'Zambia'}
                }
            },
            {headerName: "Email", field: "Email", cellClass: function(params) { return ['info','error-block']; }},
            {headerName: "CountryName", valueGetter: countryNameValueGetter}
        ];

        function countryNameValueGetter(params) {
                return params.data.Country + ',' + params.data.Name;
            }


        vm.gridOptions = {
            columnDefs: columnDefs,
            rowData: [],
            enableSorting: true,
            enableFilter: true,
            onReady: onGridReady,
            columnValueChanged: onCellValueChanged
            // ,getRowClass: function(params) {
            //     console.log(params);
            //     return 'flash';
            // }
            // ,getRowClass: function(params) {
            //                 //console.log(params);
            //                 if (params.data.isNew) {
            //                     delete params.data.isNew;
            //                     return 'flash';
            //                 } else {
            //                     return '';
            //                 }
            //             }
        }
        //-----------------------
        activate();

        function activate() {
            createBasicGrid();
            toastr.info('Demo component1 controller is activated!');
         }
         
        //-----------------------
        
        function onGridReady() {
            console.log('onGridReady');
        }
        
        function onCellValueChanged(params) {
            console.log(params);
        }
        
        function createBasicGrid() {
            vm.gridOptions.rowData = fakeData.getContacts();
        }
        
        function appendRow() {
            var newData = fakeData.getContact(vm.appendDataIndex++);
            newData.isNew = true;
            vm.gridOptions.rowData.splice(0,0, newData);
            //onNewRow()已不再使用
            //vm.gridOptions.api.onNewRows();
            vm.gridOptions.api.setRowData(vm.gridOptions.rowData);
        }
        
        function updateExistingRow() {
            var updatedNodes = [];
            vm.gridOptions.api.forEachNode( function(node) {
                if (node.data.Id === 1 || node.data.Id === 48) {
                    // node.data.name = makeid();
                    node.data.Name = 'xxx';
                    node.data.isNew = true;
                    updatedNodes.push(node);
                }
            });
            vm.gridOptions.api.refreshRows(updatedNodes);
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
        
        function makeFakeContactData() {

        }
        
        function makeid()
        {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        
            for( var i=0; i < 5; i++ )
                text += possible.charAt(Math.floor(Math.random() * possible.length));
        
            return text;
        }
        
    }

})();
