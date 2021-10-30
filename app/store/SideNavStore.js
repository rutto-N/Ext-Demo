Ext.define('Students.store.SideNavStore',{
    extend:'Ext.data.TreeStore',
    alias:'store.sidenavstore',
    storeId:'sidenavstore',
    root: {
        expanded: true,
        children: [{
                text: 'Students',
                expanded: true,
                children: [{
                        text: 'New Student',
                        leaf: true,
                        iconCls:'fas  fa-pencil-alt',
                        xtype: 'studentform',
                    },
                    {
                        text: 'All Students',
                        leaf: true,
                        iconCls:'fas fa-list',
                        xtype: 'mainlist'
                    }
                ]
            },
            {
                text: 'Posts',
                expanded: true,
                children: [
                
                    {
                        text: 'All Posts',
                        leaf: true,
                        iconCls:'fas fa-list',
                        xtype:'postview'
                    }
                ]
            },
            {
                text: 'Comments',
                expanded: true,
                children: [
                    {
                        text: 'All Comments',
                        leaf: true,
                        iconCls:'fas fa-list',
                        xtype:'commentview'
                    }
                ]
            },
        ]
    }

});