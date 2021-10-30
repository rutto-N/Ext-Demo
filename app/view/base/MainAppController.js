Ext.define('Students.view.base.MainAppController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainappcontroller',
    init: function() {
        var me = this,
            viewport = me.getView(),
            center = viewport.lookupReference('center');
    },onHomeClick:function(){
        console.log('Home click');
    },onLogout:function(){
        var sess=localStorage.getItem("Logged In");
        if(sess){
            localStorage.removeItem('Logged In');
            this.getView().destroy();
            Ext.widget('loginform');
        }

    }
});