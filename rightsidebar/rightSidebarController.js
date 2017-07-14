app.controller('rightSidebarController',['$scope','$state','$localStorage',function($scope, $state,$localStorage){

	$scope.orderList=function(){
		$state.go("orderlist");
		// $localStorage.$reset();
	}

}])