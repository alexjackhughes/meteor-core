Template.loginform.events({
    'submit form': function(event){
        sAlert.success('Welcome back!', {timeout: '3000'});
        event.preventDefault();
        var emailVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;
        Meteor.loginWithPassword(emailVar, passwordVar);
    }
});
