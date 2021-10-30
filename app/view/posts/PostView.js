Ext.define('Students.view.posts.PostView', {
  extend: 'Ext.grid.Panel',
  title: 'Posts',
  controller: 'postviewcontroller',
  xtype: 'postview',
  reference:'postview',
  viewModel:{
    type:'postviewmodel'
  },
  store: {
    type: 'posts'
  },
  columns: [
    {
       text: 'User Id',
       dataIndex: 'userId' 
      },
    {
       text: 'Id',
       dataIndex: 'id' 
      },
    {
       text: 'Title',
       dataIndex: 'title' 
      },
    {
       text: 'Body',
       dataIndex: 'body',
       flex: 5 
      },
      
  ],
  selModel:'checkboxmodel',
  tbar:[
    {
    text:'New',
    handler:'onNewPost'
  },
  {
    text:'Refresh',
    handler:'onPostRefresh'
  },
  '->',
  {
    text:'Details',
    handler:'onDetailsView',
    bind: {
      disabled: '{!postview.selection}'
  }
  },
  {
    text:'Remove',
    handler:'onPostRemove',
    bind: {
      disabled: '{!postview.selection}'
  }
  },

],


});