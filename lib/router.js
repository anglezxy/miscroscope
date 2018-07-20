
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BalzeLayout } from 'meteor/kadira:blaze-layout';
import { Posts } from '/lib/collections/posts.js';
import '/client/templates/posts/posts_list.js';
import '/client/templates/application/layout.html';



FlowRouter.route('/', {
  name: 'postsList',
 action:function () {
   BalzeLayout.render('layout',{ mainContent:'postsList'});
 }
});

FlowRouter.route('/posts/:_id', {
  name: 'postPage',
  action: function () {
    return Posts.findOne(this.param._id);
  }
});
