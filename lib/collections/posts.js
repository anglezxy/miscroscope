import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

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
  url:{
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    unique: true,
  },
}));

export { Posts };
