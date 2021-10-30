Ext.define("Students.view.comments.CommentViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.commentviewcontroller",
  mixins: [
    'Students.mixins.GridMixin',
],
  init: function () {
    let me = this;
    me.loadGridStore();
  },
  onNewComment: function () {
    console.log("New Post");
    let me = this;
    me.showCommentForm();
  },
  showCommentForm: function (record) {
    var window = Ext.create({
      xtype: "commentform",
    });
    if (record) {
      let form = window.lookupReference("add-comment").getForm();
      form.loadRecord(record);
    }
    
  },
  onCommentDetailsView: function () {
    var me = this,
    record = me.getSelectedRecord();
if (record) {
    me.showCommentForm(record);
}
me.getStore().reload();
  },
  onCommentRefresh: function () {
    let me = this,
      grid = me.getView(),
      store = grid.getStore();
    store.reload();
  },
  onCommentRemove: function () {

    var me = this,
    grid = me.getView(),
    record = me.getSelectedRecord();
if (record) {
    var url = `http://localhost:3000/comments/${record.get('id')}`;
    me.removeSelectedRecord(url, grid);
}

  },
});