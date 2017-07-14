app.controller('productController',['$scope',"$stateParams",'productService','$localStorage',function($scope, $stateParams, productService,$localStorage){
	
	this.$onInit = function() {

	// $scope.id=$stateParams.id;
	$scope.id=$localStorage.id;
	$scope.productArr;
	console.log($scope.id);
	$scope.getProduct();
}

	$scope.getProduct=function(){
		productService.getProducts($scope.id).then(function successResponse(Response){
    		console.log(Response);
    		$scope.productArr=Response.data;
    		
    	},function errorResopnse(errorResopnse){
    		console.log(errorResopnse);
    	})
	}
	

}])