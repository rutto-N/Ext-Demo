Ext.define('Students.store.Comments',{
    extend:'Ext.data.Store',
    alias:'store.comments',

    model:'Students.model.Comment',
    sorters: [{
        property: 'postId',
        direction: 'DESC'
    }, {
        property: 'name',
        direction: 'ASC'
    }],

    proxy:{
        type:'rest',
        url:'http://localhost:3000/comments',
        reader:{
            type:'json',
            rootProperty: 'comments'
    
        },
        autoLoad: true

    }
});