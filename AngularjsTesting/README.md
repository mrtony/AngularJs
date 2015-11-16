TDD - 使用Karma和Jasmine
===

依照[AngularJS unit testing tutorial with karma-jasmine](http://code.ciphertrick.com/2015/08/03/angularjs-unit-testing-tutorial-karma-jasmine/)所提供的步驟來建立，可以成功的執行測試。


# 安裝套件

Karma一定要裝在local, 然後用`./node_modules/karma/bin/karma start`來執行才會抓到相關的套件.

* **安裝angularjs**
  - `npm install angular --save`
* **安裝karma**
  - `npm install karma --save-dev`
* **安裝jasmine**
  - `npm install karma-jasmine jasmine-core --save-dev`
* **安裝angular-mock**
  - `npm install angular-mocks --save-dev`
* **安裝Phantomjs**
  - `npm install karma-phantomjs-launcher --save-dev`

# 建立config檔 - karma.conf.js
* 建立2個檔案夾：app, test
* `./node_modules/karma/bin/karma init`
* 選擇`jasmine`當成testing framework
* 選擇`Phantomjs`當成browser
* 選擇`app/*.js`, `test/*.js`為測試時要用的工作目錄
* 完成後打開`karma.conf.js`
* 在`files`加入`node_modules/angular/angular.js`, `node_modules/angular-mocks/angular-mocks.js`

# 建立測試程式
app.js
```
angular.module('MyApp', [])
.filter('reverse',[function(){
    return function(string){
        return string.split('').reverse().join('');
    }
}])
```

spec.js
```
describe('Filters', function(){ //describe your object type
    beforeEach(module('MyApp')); //load module
    
    describe('reverse',function(){ //describe your app name
    
        var reverse;    
        beforeEach(inject(function($filter){ //initialize your filter
            reverse = $filter('reverse',{});
        }));
        
        it('Should reverse a string', function(){  //write tests
            expect(reverse('rahil')).toBe('lihar'); //pass
            expect(reverse('don')).toBe('nod'); //pass
            //expect(reverse('jam')).toBe('oops'); // this test should fail
        }); 
    
    });
    
});
```

執行`karma start`, 會得到以下結果:
```
15 11 2015 12:35:57.107:WARN [karma]: No captured browser, open http://localhost:9876/
15 11 2015 12:35:57.148:INFO [karma]: Karma v0.13.14 server started at http://localhost:9876/
15 11 2015 12:35:57.161:INFO [launcher]: Starting browser PhantomJS
15 11 2015 12:36:00.508:INFO [PhantomJS 1.9.8 (Mac OS X 0.0.0)]: Connected on socket 5walaqjZeZrFjN_TAAAA with id 406818
PhantomJS 1.9.8 (Mac OS X 0.0.0): Executed 1 of 1 SUCCESS (0.003 secs / 0.011 secs)
```

# reporters
Karma監控檔案的變化並自動完成測試，但輸出都是在console. 要有HTML的輸出要加上reporters的套件:
- karma-jasmine-html-reporter: 這個最好用，只要做簡單的設定即可在debug.html得到結果
- karma-jasmine-html-reporter-livereload: 以`karma-jasmine-html-reporter`來加上liverereload, 但裝好後卻沒有對debug.html有livereload
- karma-spec-reporter: 沒有用，但設定似乎較多？

---
# 其他資料

### 安裝相關
* [Karma作者提供的安裝方式](http://karma-runner.github.io/0.13/intro/installation.html)
* [手把手教你如何安装和使用Karma-Jasmine](http://www.cnblogs.com/wushangjue/p/4539189.html)

### 未詳讀
* [Unit Testing Best Practices in AngularJS](http://andyshora.com/unit-testing-best-practices-angularjs.html)
* [Angular — Unit Testing with Jasmine](https://medium.com/angularjs-meetup-south-london/angular-unit-testing-with-jasmine-24795a44998e)