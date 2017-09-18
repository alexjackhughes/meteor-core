// If the user logs out, they are taken to the login screen
Accounts.onLogout(function(){
    FlowRouter.go('Login')
});

FlowRouter.route('/', {
    name: 'Home',
    action() {
        BlazeLayout.render('Layout', { main: "Home", bottom: "Footer" });
    }
});

FlowRouter.route('/about', {
    name: 'About',
    action() {
        BlazeLayout.render('Layout', { main: "About", bottom: "Footer" });
    }
});

// Dashboard can only be viewed by logged in user
FlowRouter.route('/dashboard', {
    name: 'Dashboard',
    action() {
        if(!Meteor.userId()){
            FlowRouter.go('Home')
        }
        BlazeLayout.render('Layout', { main: "dashboard", bottom: "Footer" });
    }
});

FlowRouter.route('/register', {
    name: 'Register',
    action() {
        BlazeLayout.render('Layout', { main: "register", bottom: "Footer" });
    }
});

FlowRouter.route('/login', {
    name: 'Login',
    action() {
        BlazeLayout.render('Layout', { main: "Login", bottom: "Footer" });
    }
});

// Not found pages will render 'home':
FlowRouter.notFound = {
    action: function() {
        BlazeLayout.render('Layout', { main: "Home", bottom: "Footer" });
    }
};
