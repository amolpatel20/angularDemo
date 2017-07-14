app.controller('orderListController',['$scope','orderlistService',function($scope, orderlistService){

	this.$onInit = function() {
		$scope.getOrderList();
}
$scope.getOrderList=function(){

	orderlistService.getOrderList().then(function successResponse(Response){
    		console.log(Response);
    		$scope.orderArr=Response.data.orders;
    		console.log($scope.orderArr);
    		
    	},function errorResopnse(errorResopnse){
    		console.log(errorResopnse);
    	})

}
$scope.listOrder=function(currentPage){
	$scope.orderArr=[];
	orderlistService.getList(currentPage).then(function successResponse(Response){
    		console.log(Response);
    		$scope.orderArr=Response.data.orders;
    		console.log($scope.orderArr);
    		
    	},function errorResopnse(errorResopnse){
    		console.log(errorResopnse);
    	})
}

}])