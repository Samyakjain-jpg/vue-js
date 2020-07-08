var myapp = new Vue({
	el:"#my-app",
	data:{
		character:""
		name:"samyak"; 
		email:"samyak@gmail.com";
	},
	methods:{
		keypressfunction: function(event){
			console.log (event);
			this.character = event.key;
		}
	}
});