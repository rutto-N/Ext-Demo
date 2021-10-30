Ext.define('Students.view.base.Footer',{
    extend:'Ext.container.Container',
    xtype:'footer',
    layout:'fit',
    items:[
        {
            layout: {
                type: 'table',
                // The total column count must be specified here
                // columns: 3,
                // tdAttrs: { style: 'padding: 10px; vertical-align: top;' }

            },
            defaults: {
                xtype: 'panel',
                width: 400,
                height: 280,
                bodyPadding: 10,
            },
            // items: [{
            //     html: '<i class="fa fa-facebook-square" aria-hidden="true"></i>',
            //     flex:1
            // },{
            //     html: 'We erteryud fujhifiudhf dfujhidhfduif dfuihdid dfuidhfyuhdf dfuisdfufsd uicsdyufduifud dfyudfgyudf asfuisdfhufh auifhidfhu basdbuisdfudf asfuisdfuidf',  
            //     flex:1
         
            //  },{
            //     html: 'We erteryud fujhifiudhf dfujhidhfduif dfuihdid dfuidhfyuhdf dfuisdfufsd uicsdyufduifud dfyudfgyudf asfuisdfhufh auifhidfhu basdbuisdfudf asfuisdfuidf',
            //     flex:1

    
            // }],
        }
    ]
});