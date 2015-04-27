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