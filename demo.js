// var app=angular.module("myApp",['ui.router','ui.bootstrap']);

// app.config(function($stateProvider, $urlRouterProvider){
// 	$stateProvider
//     .state('login', {
//       url: '/login',
//       templateUrl: 'login/login.html',
//       controller: 'LoginController'
//   })
//   $urlRouterProvider.otherwise("/login");
	
// });

	 var app=angular.module('myApp', ['ui.router','ngStorage']) 
	        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {  
	                  $urlRouterProvider  
	                                .when('/', '/login')       
	                                         .otherwise('/login');       
	                                              $stateProvider                
	                                              .state('login', {  
	                                                                url: '/login',
	                                                                views: {
	                                                                	'content':{
	                                                                		templateUrl: 'login/login.html',
	                                                                 		controller: 'LoginController'

	                                                                	}
	                                                                }              
	                                                                 }) 
	                                                                  .state('product',{
	                                                                  	url: '/product',    
	                                                                  	params: {id: null},
	                                                                  	views :{
	                                                                  		'header':{
	                                                                  			templateUrl: 'header/header.html'
	                                                                  		},
	                                                                  		'rightSidebar':{
	                                                                  			templateUrl: 'rightsidebar/rightsidebar.html',
	                                                                  			controller:'rightSidebarController'

	                                                                  		},
	                                                                  		'content':{
	                                                                  			templateUrl: 'product/productDetails.html',
	                                                                 			controller: 'productController'
	                                                                  		}
	                                                                  		
	                                                                  	}               
	                                                                 
	                                                                  })
	                                                                  .state('register',{
	                                                                  	url: '/register',    
	                                                                  	params: {id: null},
	                                                                  	views:{
	                                                                  		'content':{
	                                                                  			templateUrl: 'register/register.html',
	                                                                 			controller: 'registerController'
	                                                                  		}
	                                                                  	}             
	                                                                 
	                                                                  })  
	                                                                  .state('orderlist',{
	                                                                  	url: '/orderlist', 
	                                                                  	views:{
	                                                                  		'header':{
	                                                                  			templateUrl: 'header/header.html'
	                                                                  		},
	                                                                  		'rightSidebar':{
	                                                                  			templateUrl: 'rightsidebar/rightsidebar.html',
	                                                                  			controller:'rightSidebarController'

	                                                                  		},
	                                                                  		'content':{
	                                                                  			templateUrl: 'orderlist/orderlist.html',
	                                                                 			controller: 'orderListController'
	                                                                  		}
	                                                                  	}             
	                                                                 
	                                                                  })         
	                                          }]);
// app.controller("MainCtrl", ['$scope','restService','calService','helloProvider', '$filter','loginService' function($scope, restService, calService, helloProvider, $filter, loginService){

	
	
// 	this.$onInit = function() {
// 		$scope.posts;
// 		$scope.resData;
// 		$scope.currentPage = 0;
//     	$scope.pageSize = 10;
//     	$scope.postArr= [];
//     	$scope.q = '';
// 		restService.getData().then(function successResponse(Response){

// 			$scope.posts=Response.data;
// 			$scope.postArr=Response.data;

// 			console.log(Response);

// 		},function errorResopnse(errorResopnse){

// 		});
// 		// resFactory.query(function(res) {
//   //  			$scope.resData = res.data;
// 		// 	}, function(error) {
//   // 			// Error handler code
// 		// }); 
//     };
//     $scope.login=function(user){

//     	loginService.login(user).then(function successResponse(Response){
//     		console.log(Response);

//     	},function errorResopnse(errorResopnse){
//     		console.log(errorResopnse);
//     	})
//     }
// 	$scope.getName=function(no1,no2){
// 		$scope.n1=no1;
// 		$scope.n2=no2;
		
// 		$scope.result=calService.multiply($scope.n1,$scope.n2);
// 		console.log($scope.result);
// 		//helloProvider.setName('xyz');
// 		console.log(helloProvider.sayHello());

		

		
// 	}
// 	$scope.getData = function () {
//       // needed for the pagination calc
//       // https://docs.angularjs.org/api/ng/filter/filter
//       return $filter('filter')($scope.postArr, $scope.q)
     
//     }
//     $scope.numberOfPages=function(){
//         return Math.ceil($scope.getData().length/$scope.pageSize);                
//     }
// }]);

