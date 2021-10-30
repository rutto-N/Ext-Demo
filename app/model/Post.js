Ext.define('Students.model.Post', {
  extend: 'Ext.data.Model',
  fields: [
    {
      name: 'userId',
      type: 'int'
    },
    {
      name: 'id',
      type: 'int'
    },
    {
      name: 'title',
      type: 'string'
    },
    {
      name: 'body',
      type: 'string'
    }
  ]
});
