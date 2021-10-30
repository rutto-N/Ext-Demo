Ext.define('Students.view.comments.CommentForm',{
    extend:'Ext.window.Window',
    controller:'commentformcontroller',
    xtype:'commentform',
    title:'New Comment',
    modal:true,
    autoShow:true,
    shadow:true,
    width: 800,
    items:[
        {
            defaults: {
            anchor: '100%'
        },
            xtype:'form',
            layout:'form',
            reference: 'add-comment',
            items:[
                {
                    xtype:'numberfield',
                    name:'postId',
                    fieldLabel:'Post Id',
                    minValue:0,
                    hideTrigger:true,
                    allowBlank: false
                },
                {
                    xtype:'numberfield',
                    name:'id',
                    fieldLabel:'Comment Id',
                    minValue:0,
                    hidden:true,
                    hideTrigger:true
                },
                {
                    xtype:'textfield',
                    name:'name',
                    fieldLabel:'Name',
                    allowBlank: false
                    
                },
                {
                    xtype:'textfield',
                    name:'email',
                    fieldLabel:'Email',
                    vtype:'email',
                    allowBlank: false
                    
                },
                {
                    xtype:'htmleditor',
                    name:'body',
                    fieldLabel:'Comment',
                    allowBlank: false
                }

            ],
            buttons:[
                {
                    text: 'Save',
                    handler: 'onSaveComment',
                    formBind:true
                },
                {
                xtype: 'button',
                text: 'Clear',
                handler: 'onClear'
            }
           
             
        ]


        }
    ]
 

});