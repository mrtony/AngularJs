Angularjs form study
===
用途為study angular formH的功能。 有幾個網站當成學習的參考來源。

* [Taming Forms in AngularJS 1.3](http://www.yearofmoo.com/2014/09/taming-forms-in-angularjs-1-3.html) : 以1.3版的教學為主，有很詳細的說明及範例
* [AngularJS Form Validation with ngMessages](https://scotch.io/tutorials/angularjs-form-validation-with-ngmessages): 使用1.3版(1.4?)說明ngMessage的使用
* [What's new in AngularJS 1.4](http://blog.ninja-squad.com/2015/07/21/what-is-new-angularjs-1.4/): 介紹1.4版在`ngMessage`的改善。


# 範本示範內容
1. 基本的form使用


# 最基本的form
使用`name`參數。它會將[formController](https://docs.angularjs.org/api/ng/type/form.FormController)傳入目前的controller中, 就可以進一步的使用它的功能, 如`$valid`

```
<form name="loginForm" ng-submit="vm.login(loginForm)" novalidate>
	<div class="form-group">
		<label>身份證字號</label>
		<input name="username" type="text" placeholder="請輸入身份證字號" class="form-control" ng-model="vm.username" required />
	</div>
	<div class="form-group">
		<label>密碼</label>
		<input name="password" type="password" placeholder="請輸入密碼" class="form-control" ng-model="vm.password" required />
	</div>
	<input class="btn btn-default" type="submit" value="登入" />
</form>

//controller
angular
	.module('app.login')
	.controller('login', Login);

function Login() {
	function login(form) {
		if (form.$valid) {
			oauth.login(vm.username, vm.password)
					.then(loginRedirect.redirectPreLogin)
					.catch(function(error) {
						toastr.error(error.cause + "," + error.action);
					});
			vm.password = "";
		}
	}
}
         
```

# 問與答
* 在form中有指定`name`的用處為何