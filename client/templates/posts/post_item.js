import { Template } from 'meteor/templating';
import './post_item.html';

Template.postItem.helpers({
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});
