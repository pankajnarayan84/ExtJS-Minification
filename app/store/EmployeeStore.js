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