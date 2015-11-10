//Component1 controller

(function () {
    'use strict';

    angular
        .module('app.component1')
        .controller('Component1', Component1);

    Component1.$inject = ['logger', 'dataservices']; 

    function Component1(logger, dataservices) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Component1';
        vm.users = [];

        activate();

        function activate() {
            logger.info('Demo component1 controller is activated!');
            dataservices.getRemoteData()
            .then(function(data) {
               vm.users = data.data; 
            });
         }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.component1')
        .controller('Component1', Component1);

    Component1.$inject = ['logger', '$scope', '$interval']; 

    function Component1(logger, $scope, $interval) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Component1';
        vm.chart1Id = 'myFirstChart';
        
        vm.newDataIndex = 0;
        vm.simulateData = [];
        vm.simulateRealtimeIndexStart = 0;

        vm.amChartStockOptions = {
            id: 'SimulateRealtimeChart',
            data: [],
            type: "stock",
            theme: 'black',
            categoryField: "date",
            rotate: true,
            pathToImages: 'http://www.amcharts.com/lib/images/',
            dataMappings:[
                {fromField: "deal",toField: "value"}
                ,{fromField: "deav",toField: "volume"}
            ],
            legend: {
                enabled: true
            },
            chartScrollbar: {
                enabled: true,
            },
            categoryAxis: {
                gridPosition: "start",
                parseDates: false
            },
            valueAxes: [{
                position: "top",
                title: "Million USD"
            }],
            panels: [{
                        showCategoryAxis: false,
                        title: "Value",
                        percentHeight: 50,
                        stockGraphs: [{
                            title: "Value",
                            valueField: "value"
                        }]
                    }
                    ,{
                        //showCategoryAxis: false,
                        title: "Volume",
                        percentHeight: 50,
                        stockGraphs: [{
                            title: "Volume",
                            valueField: "volume",
                            type : "column",
                            fillAlphas: 1
                            }]
                    }                
            ],
            periodSelector : {
                position : "bottom",
                dateFormat : "YYYY-MM-DD JJ:NN",
                inputFieldsEnabled : false,
                inputFieldWidth : 150, 
                periods:
                [
                {
                    period: "DD",
                    count: 20,
                    label: "20 days"},
                {
                    period: "MM",
                    selected: true,
                    count: 1,
                    label: "1 month"},
                {
                    period: "YYYY",
                    count: 1,
                    label: "1 year"},
                {
                    period: "YTD",
                    label: "YTD"},
                {
                    period: "MAX",
                    label: "MAX"
                }]
            }
            ,chartCursorSettings: {
                valueBalloonsEnabled: true,
                fullWidth: true,
                cursorAlpha: 0.1,
                valueLineBalloonEnabled: true,
                valueLineEnabled: true,
                valueLineAlpha: 0.5
            },
            categoryAxesSettings: {
                minPeriod: 'DD'
                //maxSeries: 0
            },
            events: [
                {name: 'init',fn: chartReady}
            ]
        }


        activate();

        function activate() {
            // dataservices.getRemoteData()
            // .then(function(data) {
            //    vm.users = data.data; 
            // });
            
            logger.info('Demo component1 controller is activated!');
            generateChartData();
         }
         
        function chartReady(event) {
            debugger;
            logger.info('chart initialized!!');
        }
        
        
        function generateChartData() {
            var records = 1500; 
            var emptyDataStartIndex = 1500;
            var updateInterval = 1000;

            angular.copy(makeDailyData(records, emptyDataStartIndex), vm.amChartStockOptions.data);
        }
        
        function makeHoursData(records, emptyDataStartIndex) {
            var tempData = [];          
            var firstDate = new Date();
            firstDate.setHours(firstDate.getHours() - records);
            firstDate.setHours(0, 0, 0, 0);
            
            if (angular.isUndefined(emptyDataStartIndex))
                emptyDataStartIndex = records;
           
            for (var i = 0; i < records; i++) {
                var newDate = new Date(firstDate);
                newDate.setHours(newDate.getHours() + i);
        
                var a1 = Math.round(Math.random() * (40 + i)) + 100 + i;
                var b1 = Math.round(Math.random() * (1000 + i)) + 500 + i * 2;
                
                if (i < emptyDataStartIndex) {
                    tempData.push({
                        date: newDate,
                        deal: a1,
                        deav: b1,
                        seno: i
                    });                    
                }
                else {
                    tempData.push({
                        date: newDate
                    });
                    
                    vm.simulateData.push({
                        date: newDate,
                        deal: a1,
                        deav: b1,
                        seno: i
                    });   
                }

            }
            return tempData;
        }
        
        function makeDailyData(records) {
            var tempData = [];            
            var firstDate = new Date();
            firstDate.setDate(firstDate.getDate() - records);
            firstDate.setHours(0, 0, 0, 0);

            for (var i = 0; i < records; i++) {
                var newDate = new Date(firstDate);
                newDate.setDate(newDate.getDate() + i);
        
                var a1 = Math.round(Math.random() * (40 + i)) + 100 + i;
                var b1 = Math.round(Math.random() * (1000 + i)) + 500 + i * 2;
                
                tempData.push({
                    date: newDate,
                    deal: a1,
                    deav: b1,
                    seno: i
                });
            }
            return tempData;
        }
    }
})();
