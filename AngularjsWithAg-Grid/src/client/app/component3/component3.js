//Component1 controller

(function () {
    'use strict';

/*
新增1,新增2, 點自選的第2個, 點上移, 點刪除

*/

    angular
        .module('app.component3')
        .controller('Component3', Component1);

    Component1.$inject = ['toastr', 'fakeData', '_']; 

    function Component1(toastr, fakeData, _) {
        /* jshint validthis:true */
        var vm = this;
        var selectedNode = {};
        vm.title = 'Component1';
        vm.appendRow = appendRow;
        vm.updateRowByModel = updateRowByModel;
        vm.updateExistingRow = updateExistingRow;
        vm.addRowtoRight = addRowtoRight;
        vm.moveItemUp = moveItemUp;
        vm.moveItemDown = moveItemDown;
        vm.deleteItem = deleteItem;
        vm.deleteItems = deleteItems;
        vm.appendDataIndex = 50;
        vm.focusPlace = 0;

        //-----------------------
        var leftColumnDefs = [
            {headerName: "Id", field: "Id", width: 100},            
            {headerName: "Name", field: "Name", width: 100, suppressSorting: true, suppressMenu: true}
        ];

        var rightColumnDefs = [
            {headerName: "Id", field: "Id"},            
            {headerName: "Name", field: "Name", suppressSorting: true, suppressMenu: true}
        ];
        
        function countryNameValueGetter(params) {
                return params.data.Country + ',' + params.data.Name;
        }


        vm.leftGridOptions = {
            columnDefs: leftColumnDefs,
            rowData: [],
            enableSorting: true,
            enableFilter: true,
            suppressCellSelection: true,    //避色按space key將selection給取消
            onReady: onLeftGridReady,
            rowSelection: 'single',
            onRowSelected: onLeftRowSelected,
            columnValueChanged: onCellValueChanged
        }
        
        vm.rightGridOptions = {
            columnDefs: rightColumnDefs,
            rowData: [],
            enableSorting: true,
            enableFilter: true,
            suppressCellSelection: true,    //避色按space key將selection給取消            
            onReady: onRightGridReady,
            rowSelection: 'single',
            onRowSelected: onRightRowSelected,
            columnValueChanged: onCellValueChanged,
            localeText: {
                noRowsToShow: '無資料'
            }
        }
        //-----------------------
        activate();

        function activate() {
            createBasicGrid();
            toastr.info('Demo component1 controller is activated!');
         }
         
        //-----------------------
        
        function onLeftRowSelected(row) {
            vm.focusPlace = 0;
            vm.rightGridOptions.api.deselectAll();
            selectedNode = {};
            angular.copy(row.node, selectedNode);
        }
        
        function onRightRowSelected(row) {
            vm.focusPlace = 1;            
            vm.leftGridOptions.api.deselectAll();
            selectedNode = {};
            angular.copy(row.node, selectedNode);
        }
        
        function addRowtoRight() {
            if (_.some(vm.rightGridOptions.rowData, selectedNode.data))
                return;
            var updatedNodes = [];
            vm.rightGridOptions.api.forEachNode( function(node) {
                updatedNodes.push(node.data);
            });
            updatedNodes.push(selectedNode.data);
            vm.rightGridOptions.api.setRowData(updatedNodes);
        }
        
        function moveItemUp() {
            debugger;
            var item = vm.rightGridOptions.api.getSelectedNodes();
            var updatedNodes = [];
            var id = item[0].id;
            var prevId,
                priorItem = {};
            if (id === 0)
                return;
                
            prevId = id-1;

            angular.copy(vm.rightGridOptions.rowData[prevId], priorItem);
            
            vm.rightGridOptions.api.forEachNode( function(node) {
                if (node.id === prevId) {
                    for (var key in node.data) {
                        node.data[key] = item[0].data[key];
                    }
                }
                else if (node.id === id) {
                    for (var key in node.data) {
                        node.data[key] = priorItem[key];
                    }
                }
                updatedNodes.push(node);
            });
            
            vm.rightGridOptions.api.selectIndex(prevId);
            vm.rightGridOptions.api.refreshRows(updatedNodes);
        }
            
        function moveItemDown() {
            debugger;
            var item = vm.rightGridOptions.api.getSelectedNodes();
            var updatedNodes = [];
            var id = item[0].id;
            var nextId,
                tempFocusItem = {};
            if (id === vm.rightGridOptions.rowData.length-1)
                return;
                
            nextId = id+1;

            angular.copy(vm.rightGridOptions.rowData[id], tempFocusItem);
            
            vm.rightGridOptions.api.forEachNode(function(node) {
                if (node.id === id) {
                    for (var key in node.data) {
                        node.data[key] = vm.rightGridOptions.rowData[nextId][key];
                    }
                }
                else if (node.id === nextId) {
                    for (var key in node.data) {
                        node.data[key] = tempFocusItem[key];
                    }
                }
                updatedNodes.push(node);
            });

            vm.rightGridOptions.api.selectIndex(nextId);
            vm.rightGridOptions.api.refreshRows(updatedNodes);
        }
        
        function deleteItem() {
            var updatedNodes = [];            
            vm.rightGridOptions.api.forEachNode(function(node) {
                if (node.id !== selectedNode.id)
                    updatedNodes.push(node.data);
            });
            
            vm.rightGridOptions.api.setRowData(updatedNodes);
            
            //grid中還有資料且目前選的項目不會第一筆時，重設index
            var index;
            if (updatedNodes.length !== 0) {
                if (selectedNode.id === 0)
                    index = 0;
                else
                    index = selectedNode.id - 1;
                    
                vm.rightGridOptions.api.selectIndex(index);
            }
            else    
                vm.leftGridOptions.api.selectIndex(0);
        }
        
        function deleteItems() {
            vm.rightGridOptions.api.setRowData([]);
            vm.leftGridOptions.api.selectIndex(0);
        }
        
        function onLeftGridReady(e) {
            console.log('onLeftGridReady', e);
            vm.leftGridOptions.api.sizeColumnsToFit();           
        }
        
        function onRightGridReady(e) {
            console.log('onRightGridReady', e);
            vm.leftGridOptions.api.selectIndex(0); 
            vm.rightGridOptions.api.sizeColumnsToFit();
        }
        
        function onCellValueChanged(params) {
            console.log(params);
        }
        
        function createBasicGrid() {
            vm.leftGridOptions.rowData = fakeData.getContacts();
            vm.rightGridOptions.rowData =[];
            //vm.rightGridOptions.rowData.splice(0,20);
        }
        
        function appendRow() {
            var newData = fakeData.getContact(vm.appendDataIndex++);
            newData.isNew = true;
            vm.leftGridOptions.rowData.splice(0,0, newData);
            //onNewRow()已不再使用
            //vm.leftGridOptions.api.onNewRows();
            vm.leftGridOptions.api.setRowData(vm.leftGridOptions.rowData);
        }
        
        function updateExistingRow() {
            var updatedNodes = [];
            vm.leftGridOptions.api.forEachNode( function(node) {
                if (node.data.Id === 1 || node.data.Id === 48) {
                    // node.data.name = makeid();
                    node.data.Name = 'xxx';
                    node.data.isNew = true;
                    updatedNodes.push(node);
                }
            });
            vm.leftGridOptions.api.refreshRows(updatedNodes);
        }
        
        //找出grid內部的virtual structure中的資料並比對做更新
        function updateRowByModel() {
            // at the end of the update below, this array will
            // have all of the items that we updated
            var updatedNodes = [];
            // look for all the 'Jillian' nodes
            vm.leftGridOptions.api.forEachNode( function(node) {
                var data = node.data;
                if (data.make == 'Ford') {
                    // we found a Jilly node!!!
                    data.price += 123;
                    updatedNodes.push(node);
                }
            });
            // now tell the grid it needs refresh all these rows
            vm.leftGridOptions.api.refreshRows(updatedNodes);
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
