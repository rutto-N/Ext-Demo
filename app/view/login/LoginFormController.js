Ext.define('Students.view.login.LoginFormController',{
    extend:'Ext.app.ViewController',
    alias:'controller.loginformcontroller',

    onLoginClick:function(){
        var me=this;
        localStorage.setItem("Logged In", true);
        // Remove Login Window
        me.getView().close();

        // Add the main view to the viewport
        Ext.widget('mainapp');
        
    }

});