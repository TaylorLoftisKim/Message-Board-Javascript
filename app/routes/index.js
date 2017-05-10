import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      messages: this.store.findAll('message'),
      comments: this.store.findAll('comment')
    });
  },

  actions: {
    destroyMessage(message) {
      message.destroyRecord();
      this.transitionTo('index');
    },
    saveMessage(params) {
      var newMessage = this.store.createRecord('message', params);
      newMessage.save();
      this.transitionTo('index');
    },
    update(model, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          model.set(key,params[key]);
        }
      });
      model.save();
    },
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      newComment.save();
      this.transitionTo('index');
    }
  }
});
