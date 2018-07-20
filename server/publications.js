import { Posts } from '../lib/collections/posts.js';

if (Meteor.isServer) {
  Meteor.publish('posts', function postsPublication() {
    return Posts.find({});
  });
}
