var app = angular.module("app",["ngRoute",'ctrl']);
app.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl:'tpl/list.html'
	}).when("/show:id",{
		templateUrl:"tpl/show.html",
		controller:"show"
	}).when("/list",{
		templateUrl:"tpl/list.html",
		controller:"list"
	}).when("/add",{
		templateUrl:"tpl/add.html",
		controller:"add"
	}).when('/edit:id',{
		templateUrl:"tpl/edit.html",
		controller:"edit"
	})
})

var data1 = [
			{
				id:1,
				title:'简政放权  公开透明是谣言的天敌  部长发声  脱贫攻坚看广西'
			},
			{
				id:2,
				title:'
						科学治污  治国  迎接全国两会  井冈山脱贫礼赞'
			},
			{
				id:3,
				title:'个人主站'
			},
			{
				id:4,
				title:"123455688"
			}];

var content = [
			
			{
				id:1,
				content:"这是第一条信息"
			},
			{
				id:2,
				content:"这是第二条信息"
			},
			{
				id:3,
				content:"这是第三条信息"
			},
			{
				id:4,
				content:"这是第四条信息"
			},];

var ctrl = angular.module("ctrl",['ngRoute']);
ctrl.controller("list",function($scope){
	$scope.title = data1; 
})
ctrl.controller("show",function($scope,$routeParams){
	$scope.id = $routeParams.id;
	// console.log(id)
	$scope.data2 = data1;
	$scope.content = content;
})
ctrl.controller("edit",function($scope,$routeParams,$filter){
	$scope.id = $routeParams.id;
	$scope.data3 = data1;
	$scope.content = content;
	$scope.title = $filter('filter')($scope.data3,{"id":$scope.id})[0].title;
	$scope.cons = $filter('filter')($scope.content,{"id":$scope.id})[0].content;
	$scope.edit = function(){
		$scope.data3[$scope.id-1].title = $scope.title;
		$scope.content[$scope.id-1].content = $scope.cons;
	}
})
ctrl.controller("add",function($scope){
	$scope.data = data1;
	$scope.content = content;
	$scope.id = $scope.data[$scope.data.length-1]['id']+1;
	$scope.title = "内容";
	$scope.cons = "12";
	$scope.add = function(){
		$scope.data.push({
			"id":$scope.id,
			"title":$scope.title
		});
		$scope.content.push({
			"id":$scope.id,
			"content":$scope.cons
		})
		$scope.title = "内蓉";
		$scope.cons="12";
	}
	
})