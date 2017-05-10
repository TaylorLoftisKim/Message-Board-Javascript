import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      messages: this.store.findAll('message'),
      comments: this.store.findAll('comment')
    });
  },

  actions: {
    update(message, params) {
      debugger;
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          message.set(key,params[key]);
        }
      });
      message.save();
      this.transitionTo('index');
    },
    destroyMessage(message) {
      message.destroyRecord();
      this.transitionTo('index');
    },
    saveMessage(params) {
      var newMessage = this.store.createRecord('message', params);
      newMessage.save();
      this.transitionTo('index');
    },
  }
});
