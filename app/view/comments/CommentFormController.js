Ext.define('Students.view.comments.CommentFormController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.commentformcontroller',

  onSaveComment: function() {
    var me = this,
      window = me.getView(),
      form = window.lookupReference('add-comment').getForm();
    var id = form.findField('id').getValue();
    var url = 'http://localhost:3000/comments/';
    console.log(id);

    var method = 'POST';

    if (id) {
      url += id;
      method = 'PUT';
    }
    if (form.isValid()) {
      form.submit({
        url: url,
        method: method,
        success: function(form, action) {
          Ext.Msg.alert('Success', action.result.msg);
        },
        failure: function(form, action) {
          if (action.response.status === 201 || action.response.status === 200) {
            Ext.Msg.alert('Success', 'Saved successfully');
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
    } else {
      alert('Not valid details');
    }
    me.getStore().reload();
   
  },
  onClear: function() {
    var me = this,
      window = me.getView(),
      form = window.lookupReference('add-comment').getForm();
    form.reset();
  }
});
