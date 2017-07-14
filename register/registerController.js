app.controller('registerController',['$scope','registerRestService','$stateParams',function($scope, registerRestService, $stateParams){

	$scope.id=$stateParams.id;
	$scope.register=function(restaurant){

		registerRestService.register(restaurant,$scope.id).then(function successResponse(Response){
    		console.log(Response);
    		
    	},function errorResopnse(errorResopnse){
    		console.log(errorResopnse);
    	})
	}
}])