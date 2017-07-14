app.service('loginService', ['$http',function($http){

	this.login=function(name, password){

		return	$http({	method :"POST",	
			
			url: "http://stg-api.spotcrunch.com/stgapi/restaurants/login",
			data: {"username":name,"password":password}
			
		})
}
}]);