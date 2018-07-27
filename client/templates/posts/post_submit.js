import '../includes/access_denied.html';
import './post_submit.html';

import { insertPost } from '/lib/method.js';

Template.postSubmit.events({
  'submit form'(event) {
    event.preventDefault();
    const post = {
      url: event.target.url.value,
      title: event.target.title.value,
    };

    insertPost.call(post, (error, result) => {
      console.log(result);
/*      if (error) {
        alert('error');
      } else if (postExits) {
        alert('postExits');
      } else {
        FlowRouter.go('/');
      }*/
    });
  },

});
