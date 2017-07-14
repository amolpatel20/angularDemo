app.controller('LoginController',['$scope','loginService','$state','$localStorage',function($scope,loginService,$state,$localStorage,){
	if($localStorage.id){
		$state.go("product");
	}
	$scope.login=function(user){
		loginService.login(user.name, user.password).then(function successResponse(Response){
    		console.log(Response);
    		$scope.id=Response.data.id;
    		$localStorage.id=Response.data.id;
    		$localStorage.userId=Response.data.userId;
    		$localStorage.role=Response.data.role;
    		$state.go("product",{id: $scope.id});
    	},function errorResopnse(errorResopnse){
    		console.log(errorResopnse);
    	})
	}
	$scope.register=function(){
		$state.go("register");
	}
}]);