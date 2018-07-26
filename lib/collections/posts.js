import { Mongo } from 'meteor/mongo';

import SimpleSchema  from 'simpl-schema';

const Posts=new Mongo.Collection('posts');
/*Posts.allow({
  insert(userId){
    return !! userId;
  }
});*/

Posts.attachSchema(new SimpleSchema({
  title: {
    type: String,
  },
  url: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    /*index: true,
    unique: true,*/
  },
  userId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true,
  },
  author: {
    type: String,
    optional: true,
  },
  submitted: {
    type: Date,
    autoValue() { // eslint-disable-line consistent-return
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return { $setOnInsert: new Date() };
      } else { // eslint-disable-line no-else-return
        this.unset(); // Prevent user from supplying their own value
      }
    },
  },
}));

export { Posts };
