import { Template } from 'meteor/templating';
import { Posts } from '../../../lib/collections/posts.js';

import  './post_item.js';

import './posts_list.html';

/*var postsData = [
  {
    title: 'Introducing Telescope',
    url: 'http://sachagreig.com/introducing-telescope/'
  },
  {
    title: 'Meteor',
    url: 'http://meteor.com'
  },
  {
     title: 'The Meteor Book',
     url: 'http://themeteorbook.com'
   },
];*/

Template.postsList.helpers({
  posts(){ return  Posts.find({}) },
});
