import './post_edit.html';

import { Posts } from '../../../lib/collections/posts.js';

Template.postEdit.events({
  'submit form'(event){
  event.preventDefault();
  const currentPostId = this._id;
  const postProp={
    url:  event.target.url.value,
    title: event.target.title.value,
  };
  Posts.update(currentPostId,{$set: postProp}, (error)=>{
    if(error){
      alert(error);
    }else {
      FlowRouter.go('postPage',{_id: currentPostId });
    }
  });
  },
  'click .delete'(event){
    e.preventDefault();
    if(confirm('delete this post?')){
      Posts.remove(this._id);
      FlowRouter.go('postsList');
    }
  },
});
