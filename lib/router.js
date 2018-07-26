
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Posts } from '/lib/collections/posts.js';

import '/client/templates/application/layout.js';


FlowRouter.subscriptions = function() {
  this.register('posts',Meteor.subscribe('posts'));
};

FlowRouter.route('/', {
  name: 'postsList',
 async action() {
    await import('/client/templates/posts/posts_list.js');
   BlazeLayout.render('layout',{ mainContent:'postsList'});
 }
});



FlowRouter.route('/posts/:_id', {
  name: 'postPage',
 async action () {
    await import('/client/templates/posts/post_page.js');
    BlazeLayout.render('layout',{mainContent: 'postPage'});
  }
});

FlowRouter.route('/submit',{
  name: 'postSubmit',
  async action(){
    await import('/client/templates/posts/post_submit.js')
    BlazeLayout.render('layout',{mainContent: 'postSubmit'});
  }
});
