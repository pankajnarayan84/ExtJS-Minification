Ext.define('PNL.controller.AppController', {
	extend: 'Ext.app.Controller',
	models: [
	    'EmployeeModel'
	],
	stores: [
	    'EmployeeStore'
	],
	views: [
	    'EmployeeGrid'
	],
	
	init: function() {
        
	}
});
