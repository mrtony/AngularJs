(function () {
  'use strict';
  // 1.0.4
  
  angular.module('app.widgets', []).directive('amChart', ['$q', '$timeout', function ($q, $timeout) {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        options: '=',
        height: '@',
        width: '@'
      },
      template: '<div class="amchart"></div>',
      link: function ($scope, $el) {
  
        // use existing outer id to create new id
        var id = $el[0].id;
        $el.attr('id', id);
        var chart;
  
        // allow $scope.options to be a promise
        $q.when($scope.options).then(function(options){
          // we can't render a chart without any data
          if (options.data) {
            var renderChart = function (amChartOptions) {
              var o = amChartOptions || options;
  
              // set height and width
              var height = $scope.height || '100%';
              var width = $scope.width || '100%';
  
              $el.css({
                'height': height,
                'width': width
              });
              
              var createEvent  = function() {
                if (o.events) {
                  angular.forEach(o.events, function(value) {
                    chart.addListener(value.name, value.fn);
                  })
                }
              }
  
              // instantiate new chart object
              if (o.type === 'xy') {
                chart = o.theme ? new AmCharts.AmXYChart(AmCharts.themes[o.theme]) : new AmCharts.AmXYChart();
              } else if (o.type === 'pie') {
                chart = o.theme ? new AmCharts.AmPieChart(AmCharts.themes[o.theme]) : new AmCharts.AmPieChart();
              } else if (o.type === 'funnel') {
                chart = o.theme ? new AmCharts.AmFunnelChart(AmCharts.themes[o.theme]) : new AmCharts.AmFunnelChart();
              } else if (o.type === 'radar') {
                chart = o.theme ? new AmCharts.AmRadarChart(AmCharts.themes[o.theme]) : new AmCharts.AmRadarChart();
              } else if (o.type === 'stock') {
                chart = o.theme ? new AmCharts.AmStockChart(AmCharts.themes[o.theme]) : new AmCharts.AmStockChart();
              } else {
                chart = o.theme ? new AmCharts.AmSerialChart(AmCharts.themes[o.theme]) : new AmCharts.AmSerialChart();
              }
              
              //check AmStockChart evens: http://docs.amcharts.com/3/javascriptstockchart/AmStockChart
              createEvent();


              /** set some default values that amCharts doesnt provide **/
              $q.when(o.data)
                .then(function (data) {
                  
                  if (o.type !== 'stock')
                    initChart();
                  else
                    initStock();
                    
                  // WRITE
                  chart.write(id);
                    // Create value axis
  
                    /* if we need to create any default values, we should assign them here */
  
                  function addValueAxis(a) {
                    var valueAxis = new AmCharts.ValueAxis();
                  
                    var keys = Object.keys(a);
                    for (var i = 0; i < keys.length; i++) {
                      if (typeof a[keys[i]] !== 'object') {
                        valueAxis[keys[i]] = a[keys[i]];
                      }
                    }
                    chart.addValueAxis(valueAxis);
                  };
  
                    //reusable function to create graph
                  function addGraph(g) {
                    var graph = new AmCharts.AmGraph();
                    /** set some default values that amCharts doesnt provide **/
                      // if a category field is not specified, attempt to use the second field from an object in the array as a default value
                    graph.valueField = g.valueField || Object.keys(o.data[0])[1];
                    graph.balloonText = '<span style="font-size:14px">[[category]]: <b>[[value]]</b></span>';
                    if (g) {
                      var keys = Object.keys(g);
                      // iterate over all of the properties in the graph object and apply them to the new AmGraph
                      for (var i = 0; i < keys.length; i++) {
                        graph[keys[i]] = g[keys[i]];
                      }
                    }
                    chart.addGraph(graph);
                  };
  
                  function initStock() {
                    //1. DATASETS
                    createDataset();
                    //2.Stock Panel
                    createStockPanel();
                    //3. Period Selector
                    createPeriodSelector();
                    //4. cursorSettings
                    createCursorSettings();
                  }
  
                  function initChart() {
                    chart.pathToImages = "http://www.amcharts.com/lib/images/";
                    chart.dataProvider = data;
                    // if a category field is not specified, attempt to use the first field from an object in the array
                    chart.categoryField = o.categoryField || Object.keys(o.data[0])[0];
                    chart.startDuration = 0.5; // default animation length, because everyone loves a little pizazz
    
                    // AutoMargin is on by default, but the default 20px all around seems to create unnecessary white space around the control
                    chart.autoMargins = true;
                    chart.marginTop = 0;
                    chart.marginLeft = 0;
                    chart.marginBottom = 0;
                    chart.marginRight = 0;
    
                    // modify default creditsPosition
                    chart.creditsPosition = 'top-right';
    
                    var chartKeys = Object.keys(o);
                    for (var i = 0; i < chartKeys.length; i++) {
                      if (typeof o[chartKeys[i]] !== 'object' && typeof o[chartKeys[i]] !== 'function') {
                        chart[chartKeys[i]] = o[chartKeys[i]];
                      }
                    }
                    
                    if (o.valueAxes && o.valueAxes.length > 0) {
                      for (var i = 0; i < o.valueAxes.length; i++) {
                        addValueAxis(o.valueAxes[i]);
                      }
                    }
                    
                    
                    // create the graphs
                    if (o.graphs && o.graphs.length > 0) {
                      for (var i = 0; i < o.graphs.length; i++) {
                        addGraph(o.graphs[i]);
                      }
                    } else {
                      addGraph();
                    }
  
                    var chartCursor = new AmCharts.ChartCursor();
                    if (o.chartCursor) {
                      var keys = Object.keys(o.chartCursor);
                      for (var i = 0; i < keys.length; i++) {
                        if (typeof o.chartCursor[keys[i]] !== 'object') {
                          chartCursor[keys[i]] = o.chartCursor[keys[i]];
                        }
                      }
                    }
                    chart.addChartCursor(chartCursor);
  
                    if (o.chartScrollbar) {
                      var scrollbar = new AmCharts.ChartScrollbar();
                      var keys = Object.keys(o.chartScrollbar);
                      for (var i = 0; i < keys.length; i++) {
                        scrollbar[keys[i]] = o.chartScrollbar[keys[i]];
                      }
                      chart.chartScrollbar = scrollbar;
                    }
  
                    if (o.balloon) {
                      chart.balloon = o.balloon;
                    }

                    if (o.legend) {
                      var legend = new AmCharts.AmLegend();
                      var keys = Object.keys(o.legend);
                      for (var i = 0; i < keys.length; i++) {
                        legend[keys[i]] = o.legend[keys[i]];
                      }
                      chart.legend = legend;
                    }
    
                    if (o.type === 'pie') {
                      generatePieProperties();
                    } else {
                      generateGraphProperties();
                    }
    
                    if (o.titles) {
                      for (var i = 0;i < o.titles.length;i++) {
                        var title = o.titles[i];
                        chart.addTitle(title.text, title.size, title.color, title.alpha, title.bold);
                      };
                    }
    
                    if(o.export) {
                      chart.export = o.export;
                    }
                  } //initChart

  
                  function generateGraphProperties(data) {
                      // Assign Category Axis Properties
                      if (o.categoryAxis) {
                        var categoryAxis = chart.categoryAxis;
                      
                        if (categoryAxis) {
                          /* if we need to create any default values, we should assign them here */
                          categoryAxis.parseDates = true;
                      
                          var keys = Object.keys(o.categoryAxis);
                          for (var i = 0; i < keys.length; i++) {
                            if (!angular.isObject(o.categoryAxis[keys[i]]) || angular.isArray(o.categoryAxis[keys[i]])) {
                              categoryAxis[keys[i]] = o.categoryAxis[keys[i]];
                            } else {
                              console.log('Stripped categoryAxis obj ' + keys[i]);
                            }
                          }
                          chart.categoryAxis = categoryAxis;
                        }
                      }//generateGraphProperties
                    }
                    
                    //for stock
                    function createDataset() {
                      // create data sets first
                      var dataSet1 = new AmCharts.DataSet();
                      dataSet1.title = "first data set";
                      if (angular.isDefined(o.dataMappings))
                        dataSet1.fieldMappings = o.dataMappings;
                      else
                        dataSet1.fieldMappings = [
                          {fromField: "value",toField: "value"}
                          ,{fromField: "volume",toField: "volume"}
                        ];
                      dataSet1.dataProvider = o.data;
                      if (angular.isDefined(o.categoryField))
                        dataSet1.categoryField = o.categoryField;
                      else
                        dataSet1.categoryField = "date";
                  
                      //config date format
                      if (angular.isDefined(o.dataDateFormat))
                        chart.dataDateFormat = o.dataDateFormat;
                      
                      // set data sets to the chart
                      chart.dataSets = [dataSet1];
                    }
                    
                    function createStockPanel() {
                      var defaultGraph = {
                        title : "Value",
                        valueField : "value",
                        lineThickness : 1,
                        //lineColor : "#00cc00",
                        useDataSetColors : false
                      };
                      
                      angular.forEach(o.panels, function(panel) {
                          var stockPanel = new AmCharts.StockPanel();
                          
                          for (var prop in panel) {
                            if (angular.isNumber(panel[prop]) || angular.isString(panel[prop]) || typeof panel[prop] === 'boolean') {
                              stockPanel[prop] = panel[prop];
                            }
                          }
                          
                          if (panel.stockGraphs) {
                            angular.forEach(panel.stockGraphs, function(value) {
                                var graph = new AmCharts.StockGraph();  
                                angular.extend(graph, defaultGraph, value);
                                stockPanel.addStockGraph(graph);
                            });
                          }
                            
                          if (panel.stockLegend) {
                            stockPanel.stockLegend = new AmCharts.StockLegend();
                            angular.extend(stockPanel.stockLegend, panel.stockLegend);
                          }
                          
                          chart.panels.push(stockPanel);
                      });
                      
                      
                      
                      // var stockPanel1 = new AmCharts.StockPanel();
                      // stockPanel1.showCategoryAxis = false;
                      // //TODO: needed from controller
                      // stockPanel1.title = "台積電";
                      // stockPanel1.percentHeight = 50;
                      
                      // add value axes
//                       var valueAxis1 = new AmCharts.ValueAxis();
//                       if (angular.isDefined(o.productPriceAxis)) {
//                         valueAxis1.maximum = o.productPriceAxis.maximum;
//                         valueAxis1.minimum = o.productPriceAxis.minimum;
//                       }
// 
//                       stockPanel1.addValueAxis(valueAxis1);
                      
                      // var valueAxis2 = new AmCharts.ValueAxis();
                      // valueAxis2.position = "right";
                      // stockPanel1.addValueAxis(valueAxis2);
                      
                      // graph of first stock panel

                      
                      
                      // var graph1 = new AmCharts.StockGraph();
                      // graph1.title = "Value";
                      // graph1.valueField = "value";
                      // graph1.lineThickness = 1;
                      // graph1.lineColor = "#00cc00";
                      // graph1.useDataSetColors = false;
                      // stockPanel1.addStockGraph(graph1);
                      
                      // create stock legend                
                      //stockPanel1.stockLegend = new AmCharts.StockLegend();
                  
                      // var stockPanel2 = new AmCharts.StockPanel();
                      // stockPanel2.title = "Volume";
                      // stockPanel2.percentHeight = 50;
                      // var graph2 = new AmCharts.StockGraph();
                      // graph2.title = "Volume";
                      // graph2.valueField = "volume";
                      // graph2.type = "column";
                      // graph2.lineThickness = 1;
                      // graph2.showBalloon = false;
                      // graph2.fillAlphas = 1;
                      //graph2.valueAxis = valueAxis2;
                      //stockPanel1.addStockGraph(graph2);
                      
                      //stockPanel2.addStockGraph(graph2);
                      //stockPanel2.stockLegend = new AmCharts.StockLegend();
                      
                      // set panels to the chart
                      //chart.panels = [stockPanel1, stockPanel2];
                      
                      //TODO: 這是什麼?
                      // var sbsettings = new AmCharts.ChartScrollbarSettings();
                      // sbsettings.graph = graph1;
                      // sbsettings.usePeriod = "WW";
                      // chart.chartScrollbarSettings = sbsettings;
                      
                      //axes
                      if (o.categoryAxesSettings) {
                        var categoryAxesSettings = new AmCharts.CategoryAxesSettings();
                        angular.extend(categoryAxesSettings, o.categoryAxesSettings);                        
                        chart.categoryAxesSettings = categoryAxesSettings;                        
                      }
                    }
                    
                    function createPeriodSelector() {
                      if (o.periodSelector) {
                        var periodSelector = new AmCharts.PeriodSelector();
                        angular.extend(periodSelector, o.periodSelector);
                        chart.periodSelector = periodSelector;
                      }
                    }
                    
                    function createCursorSettings() {
                      var cursorSettings = new AmCharts.ChartCursorSettings();
                      angular.extend(cursorSettings, o.chartCursorSettings);
                      chart.chartCursorSettings = cursorSettings;
                    }
  
                  function generatePieProperties() {
                    if (o.balloon) {
                      chart.balloon = o.balloon;
                    }
                  }
  
                });
            }; //renderchart
  
  
            // Render the chart
            renderChart();
  
  
            // EVENTS =========================================================================
  
            $scope.$on('amCharts.triggerChartAnimate', function (event, id) {
              if (id === $el[0].id || !id) {
                chart.animateAgain();
              }
            });
  
            $scope.$on('amCharts.updateData', function (event, data, id) {
              if (id === $el[0].id || !id) {
                chart.dataProvider = data;
                chart.validateData();
              }
  
            });
  
            $scope.$on('amCharts.validateNow', function (event, validateData, skipEvents, id) {
              if (id === $el[0].id || !id) {
                chart.validateNow(validateData === undefined ? true : validateData,
                  skipEvents === undefined ? false : skipEvents);
              }
            });
  
            $scope.$on('amCharts.renderChart', function (event, amChartOptions, id) {
              if (id === $el[0].id || !id) {
                renderChart(amChartOptions);
              }
            });
            
            $scope.$on('$destroy', function () {
              if (chart) {
                try {
                  chart.destroy();
                } catch (ex) {
                }
                $timeout(function () {
                  $el.remove();
                }, 0);
              }
            });
  
          }
        });
  
      }
    };
  }]);
})();