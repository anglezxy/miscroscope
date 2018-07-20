import { Meteor } from 'meteor/meteor';
import { addpost } from './fixtures.js';
import './publications.js';

Meteor.startup(() => {
  // code to run on server at startup
  addpost();
});
