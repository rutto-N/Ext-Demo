Ext.define('Students.view.base.MainApp',{
    extend:'Ext.container.Viewport',
    xtype:'mainapp',
    layout:'border',
    controller:'mainappcontroller',
    items: [
        {
            region: 'north',     // center region is required, no width/height specified 
            xtype: 'panel',
            layout: 'fit',
            margin: '5 5 0 0',
            tbar: [

                '->',
                {
                    text:'Logout',
                    handler:'onLogout'

                }
              ],
           
              
            
        },{
        // title: 'South Region is resizable',
        region: 'south',     // position for region
        xtype: 'panel',
        height: 100,
        layout:'fit',
        margin: '0 5 5 5',
        items:[
            {
                xtype:'footer'
            }
        ]
    },{
        title: 'Main Menu',
        region:'west',
        xtype: 'panel',
        margin: '0 5 5 5',
        width: 200,
        collapsible: true,   // make collapsible
        id: 'west-region-container',
        layout: 'fit',
        items:[{
            xtype:'sidenav'

        }]
    },{
        region: 'center',
            itemId: 'center',
            xtype: 'tabpanel', // TabPanel itself has no title
            activeTab: 0,
            items: [{
                title: 'Home',
                xtype:'postview'
            }, ]
    }],


});