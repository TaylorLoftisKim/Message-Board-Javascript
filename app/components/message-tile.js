import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(message, params) {
      this.sendAction('update', message, params);
    },
    delete(message) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.sendAction('destroyMessage', message);
      }
    },
    saveComment() {
      var params = {
        user: this.get('user'),
        content: this.get('content')
      };
        this.set('addNewComment', false);
        this.sendAction('saveComment', params);
      }

  }
});
