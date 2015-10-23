//Component1 controller

(function () {
    'use strict';

    angular
        .module('app.altone.subone')
        .controller('Subone', Subone);

    Subone.$inject = ['toastr']; 

    function Subone(toastr) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Subone title in js';

        var columnDefs = [
            {headerName: "月份", field: "exdt", width: 60, cellClass: ['text-center', 'bg-danger']},
            {headerName: "買價", field: "ask_", width: 60, cellClass: ['text-center', 'bg-danger']},
            {headerName: "賣價", field: "bid_", width: 60, cellClass: ['text-center', 'bg-success']},
            {headerName: "成交", field: "deal", width: 60, cellClass: ['text-center']},
            {headerName: "漲跌", field: "netc", width: 60, cellClass: ['text-center']},
            {headerName: "現量", field: "deav", width: 60, cellClass: ['text-center']},
            {headerName: "總量", field: "volu", width: 60, cellClass: ['text-center']},
            {headerName: "買量", field: "askv", width: 60, cellClass: ['text-center']},
            {headerName: "賣量", field: "bidv", width: 60, cellClass: ['text-center']},
            {headerName: "開盤", field: "open", width: 60, cellClass: ['text-center']},
            {headerName: "最高", field: "high", width: 60, cellClass: ['text-center']},
            {headerName: "最低", field: "lowp", width: 60, cellClass: ['text-center']},
            {headerName: "平盤", field: "refe", width: 60, cellClass: ['text-center']},
            {headerName: "時間", field: "time", width: 100, cellClass: ['text-center']}                
        ];

        
        vm.gridOptions = {
            columnDefs: columnDefs,
            rowData: [
                {exdt: '201510', ask_: '8500', bid_:'8501', deal: '8502', netc: '10', deav: '12345', volu: '34567', askv: '12345', bidv:'12345', open: '8500', high: '8600', lowp:'8400', refe:'8567', time:'1234'},
                {exdt: '201511', ask_: '8500', bid_:'8501', deal: '8502', netc: '10', deav: '12345', volu: '34567', askv: '12345', bidv:'12345', open: '8500', high: '8600', lowp:'8400', refe:'8567', time:'1234'},
                {exdt: '201601', ask_: '8500', bid_:'8501', deal: '8502', netc: '10', deav: '12345', volu: '34567', askv: '12345', bidv:'12345', open: '8500', high: '8600', lowp:'8400', refe:'8567', time:'1234'}
            ]
        };
        
        activate();

        function activate() {
            toastr.info('Demo Subone controller is activated!');
         }
    }
})();
