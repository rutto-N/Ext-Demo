Ext.define('Students.view.base.SideNavController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.sidenavcontroller',
    init: function() {},
    onItemClick: function(treepanel, record, item, index, e, eOpts) {

        var centerPanel = Ext.ComponentQuery.query('mainapp #center')[0];
        // console.log(centerPanel);
        
        var newItem = centerPanel.items.findBy(function(item, index) {
            return record.get('text') === item.title;
        });

        console.log(record);
        if (newItem === null || newItem === undefined) {
            newItem = centerPanel.add({
                xtype: record.get('xtype'),
                title: record.get('text'),
                closable: true,
            });
        }
        centerPanel.setActiveItem(newItem);
    },
    // onItemClick:function( sender, info, eOpts){
    //     // console.log(sender);
    //     console.log(info.item);
    // }


});