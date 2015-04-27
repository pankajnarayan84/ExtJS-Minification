Ext.namespace('PNL.util');
PNL.util ={
		getRandomDate : function(){
			var from = new Date(1970, 0, 1).getTime();
			var to = new Date().getTime();
			return new Date(from + Math.random() * (to - from));
		},
		createFakeData: function(count) {
			var firstNames   = ['John', 'Nick', 'Spencer', 'Eddie'];
			var lastNames    = ['Smith', 'Roter', 'Mead', 'Depp'];
				
			var data = [];
			for (var i = 0; i < count ; i++) {
				var dob = this.getRandomDate();           
				var firstNameId = Math.floor(Math.random() * firstNames.length);
				var lastNameId  = Math.floor(Math.random() * lastNames.length);
				data.push({firstName: firstNames[firstNameId], lastName:lastNames[lastNameId],dob: dob});
			}
			return data;
    }
}