app.service('calService',['calFactory',function(calFactory){
	this.multiply=function(a,b){
		return calFactory.multiply(a,b);
	}
}]);