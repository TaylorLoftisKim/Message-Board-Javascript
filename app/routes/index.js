import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('message');
  },

  actions: {
    destroyMessage(message) {
      message.destroyRecord();
      this.transitionTo('index');
    }
  }
});
