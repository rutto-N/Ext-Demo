Ext.define('Students.store.StudentClassStore',{
    extend:'Ext.data.Store',
    alias:'store.studentclassstore',
    storeId:'studentclassstore',
    fields: ['abbr', 'name'],
    data : [
        {"abbr":"AL", "name":"Alabama"},
        {"abbr":"AK", "name":"Alaska"},
        {"abbr":"AZ", "name":"Arizona"}
    ],
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true
});