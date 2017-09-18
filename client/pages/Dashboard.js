/*
 * JavaScript that runs on creation of page:
 */
Template.dashboard.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('blogs');
    });
});

/*
 * Methods for interacting with data, i.e. Mongo Documents:
 */
Template.dashboard.helpers({
    myBlogs: function() {
        return Blogs.find();
    }
});


Template.dashboard.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    },
    'click .fa-trash': function() {
        Meteor.call('deleteBlog', this._id);
    },
});
