Ext.define('Students.model.Comment',{
    extend:'Ext.data.Model',
    fields:[
        {
            name:'postId',
            type: 'int'
        },
        {
            name:'id',
            type: 'int'
        },
        {
            name:'name',
            type: 'string'
        }, 
        {
            name:'email',
            type: 'string'
        }, 
        {
            name:'body',
            type: 'string'
        }
        
    ]
});