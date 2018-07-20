import { Posts } from '/lib/collections/posts.js';
import '/client/templates/posts/posts_list.js';
import './main.html';

/*Route.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function () {
    return Meteor.subscribe('posts');
  }
});
Route.route('/', { name: 'postsList' });
Route.route('/posts/:_id', {
  name: 'postPage',
  data: function () {
    return Posts.findOne(this.param._id);
  }
});*/
