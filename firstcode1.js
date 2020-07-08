var myapp = new Vue({
	el:"#my-app",
	data:{
		name:"samyak jain",
		playlist:"Vuejs"
	},
	methods:{
		run : function(message){
			return "I am running " + message;
	run	},
	welcome: function(daytime){
		return "Good"+daytime;
	},
	//parameter access
	valueAccess : function(){
		return this.name+"  "+this.playlist;
		// uper this jo he vo Vue and data property ko access krta he
	}
	}


});