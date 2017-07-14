app.provider('helloProvider',function(){
	this.name="";
	this.$get=function(){
		var name=this.name;
		return{
			sayHello:function(){
				return "Hello,"+name+"!"
			}
		}
	};
	this.setName=function(name){
		this.name=name;
	};
});