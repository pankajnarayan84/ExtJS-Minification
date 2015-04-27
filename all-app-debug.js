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
Ext.define('PNL.model.EmployeeModel', {
	extend : 'Ext.data.Model',
	fields : [{
		name : 'firstName',
		mapping : 'firstName'
	},{
		name : 'lastName',
		mapping : 'lastName'
	},{
		name : 'dob',
		mapping : 'dob'
	}]
});
Ext.define('PNL.store.EmployeeStore', {
	extend: 'Ext.data.Store',
	model : 'PNL.model.EmployeeModel',
	proxy: {
            type: 'memory',
            reader: {
                type: 'json'
            }
    }
});
Ext.define('PNL.view.EmployeeGrid', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.EmployeeGrid',
	title: 'Emplyee List',
	
	initComponent: function () {
	var store = new PNL.store.EmployeeStore();
	
	this.items = [{
		xtype: 'gridpanel',
		store: store,
		emptyText : 'No Data',
		columns: [
            {text: "First Name", width:120, dataIndex: 'firstName'},
			{text: "Last Name", width:120, dataIndex: 'lastName'},
            {text: "DOB", width: 380, dataIndex: 'dob'}
        ]
	}];

	var data = PNL.util.createFakeData(10);
	store.loadData(data);
	
	this.callParent(arguments);
	}
});

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

Ext.application({
	name: 'PNL',
	appFolder : 'app',
	
	controllers: [
		'AppController'
	],
	
	requires: [
		 'Ext.tab.*',
		'Ext.window.*',
		'Ext.tip.*',
		'Ext.layout.container.Border'
	],
	createViewport:	function(notifications){
		Ext.create('Ext.container.Viewport', {
			layout: 'border',
			items: [
				{
                    region: 'center',
                    xtype: 'EmployeeGrid',
					height : 400,
					weight:400
                }
			]
		});
	},
	launch: function() {
		this.createViewport();
	}
});

