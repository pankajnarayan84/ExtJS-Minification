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
