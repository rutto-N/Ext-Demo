Ext.define('Students.view.posts.PostForm',{
    extend:'Ext.window.Window',
    controller:'postformcontroller',
    xtype:'postform',
    title:'New Post',
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
            reference: 'add-post',
            items:[
                {
                    xtype:'numberfield',
                    name:'userId',
                    fieldLabel:'User Id',
                    minValue:0,
                    hideTrigger:true,
                    allowBlank: false
                    
                },
                {
                    xtype:'numberfield',
                    name:'id',
                    fieldLabel:'Post Id',
                    minValue:0,
                    hideTrigger:true,
                    hidden:true,
                    allowBlank: false
                },
                {
                    xtype:'textfield',
                    name:'title',
                    fieldLabel:'Post Title',
                    allowBlank: false
                    
                },
                {
                    xtype:'htmleditor',
                    name:'body',
                    fieldLabel:'Post',
                    allowBlank: false
                }

            ],
            buttons:[
                {
                    xtype: 'button',
                    formBind:true,
                    text: 'Save',
                    handler: 'onSavePost'
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