Ag-grid page
===

使用page可以延遲載入資料，對於有大量資料的表格會是很用的功能。使用者可以使用內建的page瀏覽鍵來切換page內容。

如果grid已知資料的筆數，就可以顯示在page瀏覽器。另外也可以限制一頁可顯示的筆數。但如果不知道資料到底有幾筆，可以一直click `next`鍵直到最後的頁面被載入，而這時grid㲃於`infinite papagination`模式。在這種模式下，page瀏覽器會顯示`1 of more`，而且`last`按鍵是無法點擊的。

# sorting 和 filtering
sorting和filter有2種模式，只能選一種來使用:
1. in-grid
2. server side

但作者又說了一段話, 那到底可不可以mix啊..
```
It is possible to mix between in-grid sorting / filtering with server side filtering / sorting. Eg if you are doing in-grid sorting, you can do server side filtering, and vice versa.
```

# 使用page
不需要給`rowData`, 只要設定好`datasource`並使用`setDatasource()`就可以使用了。 之後只要每次去點選page瀏覽器的`next`, `prev`, `last`, `first`就會觸發`getRow`被呼叫，並由ag-grid自動塞入`params`參數，然後只要依`startRow`和`endRow`指定資料，然後將資料給`params.successCallback`的第1個參數, grid就會更新內容了
。 

dataSource幾個參數如下:
1. pageSize: 指定一頁要顯示多少筆資料。
2. getRows: callback, 當建立grid及換頁時會自動被ag-grid呼叫。
3. rowCount: 如果已確定知道有多少筆數，可以在setDatasource()時設定，否則將它設為`-1`, 讓grid在infinite pagination下運作. 如果last row是要由server端所傳來的，那可以在`successCallback()`的第2個參數去設定。

params幾個參數如下：
1. startRow: ag-grid自動計算並給予的, 可與endRow搭一田尸山山用來指派要將資料的哪一段塞給successCallback()
2. endRow: 同上
3. successCallback: 需傳入2個參數:
  - rowsThisPage: 這一頁要顯示的資料陣列
  - lastRow: 若不知道資料有多少筆, 設為-1. 若已知道最後一筆資料的筆數, 將最後一筆資料的index塞給它。
4. failCallback: 不需任何參數. 取資料失敗時可以使用, 呼叫後會將grid清空。

```
var dataSource = {
	//rowCount: ???, - not setting the row count, infinite paging will be used
	pageSize: parseInt($scope.pageSize), // changing to number, as scope keeps it as a string
	getRows: function (params) {
		// this code should contact the server for rows. however for the purposes of the demo,
		// the data is generated locally, a timer is used to give the experience of
		// an asynchronous call
		console.log('asking for ' + params.startRow + ' to ' + params.endRow);
		setTimeout( function() {
			// take a chunk of the array, matching the start and finish times
			var rowsThisPage = allOfTheData.slice(params.startRow, params.endRow);
			// see if we have come to the last page. if we have, set lastRow to
			// the very last row of the last page. if you are getting data from
			// a server, lastRow could be returned separately if the lastRow
			// is not in the current page.
			var lastRow = -1;
			if (allOfTheData.length <= params.endRow) {
				lastRow = allOfTheData.length;
			}
			params.successCallback(rowsThisPage, lastRow);
		}, 500);
	}
};

$scope.gridOptions.api.setDatasource(dataSource);


```