Ext.define('Students.store.Posts',{
    extend:'Ext.data.Store',
    alias:'store.posts',

    model:'Students.model.Post',
    sorters: [{
        property: 'title',
        direction: 'DESC'
    }, {
        property: 'id',
        direction: 'ASC'
    }],


    proxy:{
        type:'rest',
        url:'http://localhost:3000/posts',
        reader:{
            type:'json',
            rootProperty: 'posts',
    
        }
        
    },
    autoLoad: true


});

