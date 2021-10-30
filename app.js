/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Students.Application',

    name: 'Students',

    requires: [
        // This will automatically load all classes in the Students namespace
        // so that application classes do not need to require each other.
        'Students.*'
    ],
  

    // The name of the initial view to create.
    // mainView: 'Students.view.login.LoginForm'
});
