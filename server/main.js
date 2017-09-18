import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

// Finds all blogs written by the user and returns them:
Meteor.publish('blogs', function() {
    return Blogs.find({
        author:this.userId
    });
});

// Find all blogs
Meteor.publish('blogsAll', function() {
    return Blogs.find();
});
