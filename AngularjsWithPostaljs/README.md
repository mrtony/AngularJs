# 測試Angularjs + Postal套件
Postal是一個event bus套件, 可做subscribe和publish

### 加入postal套件
`bower install postal --save-dev`

### 使用postal套件
`<script src="postal.js"></script>`

!!記得也要安裝`lodash.js`.

### 範例1: 建立一個subscribe和publish
參考[example](https://github.com/postaljs/postal.js/blob/master/example/standard/js/main.js)建立一個簡單的subscribe/publish.

```
function testSimpleSubPub() {
    // This gets you a handle to the default postal channel...
    // For grins, you can get a named channel instead like this:
    // var channel = postal.channel( 'DoctorWho' );
    var channel = postal.channel();
    // subscribe to 'name.change' topics
    var subscription = channel.subscribe( "name.change", function( data ) {
        vm.title = "Trigger by publisher!!"
    } );
    // And someone publishes a name change:
    channel.publish( "name.change", { name: "Dr. Who" } );
    // To unsubscribe, you:
    subscription.unsubscribe();
}
```
當執行到publish時, title就會被更新. 也可以搭配timer做publisher.

### 範例2-以timeout時作publish
```
function testSimpleTimeoutSubPub() {
    // This gets you a handle to the default postal channel...
    // For grins, you can get a named channel instead like this:
    // var channel = postal.channel( 'DoctorWho' );
    var channel = postal.channel();
    // subscribe to 'name.change' topics
    var subscription = channel.subscribe( "name.change", function( data ) {
            vm.title = "Trigger by publisher!!"
        } );
    
    // And someone publishes a name change:            
    $timeout(function(){   
        // And someone publishes a name change:
        channel.publish( "name.change", { name: "Dr. Who" } );
        // To unsubscribe, you:
        subscription.unsubscribe();
    
    }, 1*1000);             
}
```

### 文件
* [Postal Github](https://github.com/postaljs/postal.js)
