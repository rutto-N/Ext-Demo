/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Students.Application', {
    extend: 'Ext.app.Application',

    name: 'Students',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },
    views: [
        'Students.view.login.LoginForm',
        'Students.view.base.MainApp'
    ],
    launch: function () {

        // It's important to note that this type of application could use
        // any type of storage, i.e., Cookies, LocalStorage, etc.
        let loggedIn;

        // Check to see the current value of the localStorage key
        loggedIn = localStorage.getItem("Logged In");

        // This ternary operator determines the value of the TutorialLoggedIn key.
        // If TutorialLoggedIn isn't true, we display the login window,
        // otherwise, we display the main view
        Ext.widget(loggedIn ? 'mainapp' : 'loginform');

    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
