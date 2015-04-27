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
