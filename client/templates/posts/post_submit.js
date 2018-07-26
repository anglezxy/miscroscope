
import '../includes/access_denied.html';
import './post_submit.html';

import { insertPost } from '/lib/method.js';

Template.postSubmit.events({
  'submit form'(event){
    event.preventDefault();
    const post={
      url: event.target.url.value,
      title: event.target.title.value,
    };
    insertPost.call(post,(error,{ postsExits = false }) =>{
   if(error){
     alert('error');
   }else if(postsExits){
     alert('postsExits');
   }else {
     FlowRouter.go('/');
   }
 });
  },

});
