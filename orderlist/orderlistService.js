app.service('orderlistService',['$localStorage','$http',function($localStorage, $http){

	
	this.getOrderList=function(){
		console.log($localStorage.id);
		console.log($localStorage.userId);

		return	$http({	method :"GET",	
			
			url: "http://stg-api.spotcrunch.com/stgapi/app_user_orders/getOrdersAndTotal?limit=10&orderBy=&page=1&restaurantId="+$localStorage.userId+"&access_token="+$localStorage.id
			
		})
	}
	this.getList=function(currentPage){
		return	$http({	method :"GET",	
			
			url: "http://stg-api.spotcrunch.com/stgapi/app_user_orders/getOrdersAndTotal?limit=10&orderBy=&page="+currentPage+"&restaurantId="+$localStorage.userId+"&access_token="+$localStorage.id
			
		})
	}
}])