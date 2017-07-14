app.service('restService', ['$http',function($http){

	this.getData=function(){

		return	$http({	method :"GET",	url: "https://jsonplaceholder.typicode.com/posts"})
}
}]);