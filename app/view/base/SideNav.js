Ext.define('Students.view.base.SideNav',{
    extend: 'Ext.tree.Panel',
    xtype: 'sidenav',
    controller: 'sidenavcontroller',
    rootVisible: false,
    store: {
        type: 'sidenavstore'
    },
    useArrows: true,
    listeners: {
        itemclick: 'onItemClick',
    }

})