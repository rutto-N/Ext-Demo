Ext.define('Students.view.comments.CommentView',{
    extend:'Ext.grid.Panel',
    xtype:'commentview',
    controller:'commentviewcontroller',
    reference:'commentview',
    viewModel:{
        type: 'commentviewmodel'
    },
    title: 'Comments',
    store:{
        type:'comments'

    },
    columns:[
        {
            text:'User Id',
            dataIndex:'postId'
        },
        {
            text:'Id',
            dataIndex:'id'
        },
        {
            text:'Name',
            dataIndex:'name'
        },
        {
            text:'Email',
            dataIndex:'email'
        },
        {
            text:'Body',
            dataIndex:'body',
            flex:5
        }
    ],
    selModel:'checkboxmodel',
    tbar:[
        {
          text:'New',
          handler:'onNewComment',
         
        },
        {
            text:'Refresh',
            handler:'onCommentRefresh'
          },
          '->',
        {
            text:'Details',
            handler:'onCommentDetailsView',
            bind: {
                disabled: '{!commentview.selection}'
            },
          },
          {
            text:'Remove',
            handler:'onCommentRemove',
            bind: {
                disabled: '{!commentview.selection}'
            },
          },
        
        
    ]
});