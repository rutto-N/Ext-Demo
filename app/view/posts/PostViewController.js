Ext.define('Students.view.posts.PostViewController',{
    extend:'Ext.app.ViewController',
    alias:'controller.postviewcontroller',
    mixins: [
        'Students.mixins.GridMixin',
    ],
    init:function(){
        let me = this;
        me.loadGridStore();
    },
    onNewPost:function(){
        console.log('New Post');
        var me=this;
        me.showForm();
        
    },
    showForm:function(record){
        var window=Ext.create({
            xtype:'postform'

        });
        if (record) {
            var form = window.lookupReference('add-post').getForm();
            form.loadRecord(record);
          
        }
    },
    onDetailsView:function(){
        var me = this,
        record = me.getSelectedRecord();
    if (record) {
        me.showForm(record);
    }
    me.loadGridStore();
    },
    onPostRemove:function(){
        var me = this,
        grid = me.getView(),
        record = me.getSelectedRecord();
    if (record) {
        var url = `http://localhost:3000/posts/${record.get('id')}`;
        me.removeSelectedRecord(url, grid);
    }

        

    },
    onPostRefresh:function(){
        let me = this;
        me.loadGridStore();
          
    },
    
 

});
