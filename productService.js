app.service('productService', ['$http',function($http){

	this.getProducts=function(id){

		console.log(id);

		return	$http({	method :"GET",	
			
			url: "http://stg-api.spotcrunch.com/stgapi/products?access_token="+id
			
		})
}
}]);