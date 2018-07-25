import { Posts } from '/lib/collections/posts.js';
import './post_page.html';
import './post_item.js';
import '../application/not_found.js';

Template.postPage.onCreated(function () {
  const templateInstance=this;
  templateInstance.autorun(() => {
    if(FlowRouter.subsReady('posts')){
      if(!Posts.findOne(FlowRouter.getParam('_id'))){
        BlazeLayout.render('notFount');
      }
    }
  });
});

Template.postPage.helpers({
  post(){
    return Posts.findOne(FlowRouter.getParam('_id'));
  },

});
