Ext.define('Students.view.posts.PostFormController',{
    extend:'Ext.app.ViewController',
    alias:'controller.postformcontroller',
    mixins: [
        'Students.mixins.GridMixin',
    ],
    onSavePost:function(){
        var me = this,
          window = me.getView(),
            // var store=window.getStore(),
            form = window.lookupReference('add-post').getForm();
            var url= 'http://localhost:3000/posts/';
            var id=form.findField('id').getValue();
            console.log(id);
            var method='POST';

            if(id){
                url+=id;
                method='PUT';
            }
            if (form.isValid()) {
                form.submit({
                    url: url,
                    method:method,
                success: function(form, action) {
                    Ext.Msg.alert('Success', action.result.msg);
                },
                failure: function(form, action) {
                    if (action.response.status === 201 ||  action.response.status === 200) {
                        Ext.Msg.alert('Success', "Saved successfully");
                    } else {
                        switch (action.failureType) {
                            case Ext.form.action.Action.CLIENT_INVALID:
                                Ext.Msg.alert(
                                    'Failure',
                                    'Form fields may not be submitted with invalid values'
                                );
                                break;
                            case Ext.form.action.Action.CONNECT_FAILURE:
                                Ext.Msg.alert('Failure', 'Ajax communication failed');
                                break;
                            case Ext.form.action.Action.SERVER_INVALID:
                                Ext.Msg.alert('Failure', action.result.msg);
                        }
                    }

                }

        

                });
            }else{
                alert('Something Went Wrong');
            }
                  //refresh store
                  me.loadGridStore();
           

    },
    onClear:function(){
        console.log("On clear");
        var me = this,
        window = me.getView(),
        form = window.lookupReference('add-post').getForm();
    form.reset();
}
        
        
    

});