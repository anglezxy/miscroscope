import { Posts } from '../../../lib/collections/posts';
import '../includes/access_denied.html';
import './post_submit.html';

Template.postSubmit.events({
  'submit form'(event){
    event.preventDefault();
    const post={
      url: event.target.url.value,
      title: event.target.title.value,
    };
 Posts.insert(post,(error) =>{
   if(error){
     alert('error');
   }else {
     FlowRouter.go('/');
   }
 });
  },

});
