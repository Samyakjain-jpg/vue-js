var myapp = new Vue({
	el:"#my-app",
	data:{

	},
	methods:{
		keypressfunction: function(event){
			console.log("event.key");
		},
		keyupfunction: function(){
			console.log("key up...");
		},
		keydownfunction: function(){
			console.log("key down...");
		}
	}
})