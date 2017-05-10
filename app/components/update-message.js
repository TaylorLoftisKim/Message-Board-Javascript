import Ember from 'ember';

export default Ember.Component.extend({
  updateMessageForm: false,
  actions: {
    updateMessageForm() {
      this.set('updateMessageForm', true);
    },
    update(model) {
      var params = {
        user: this.get('user'),
        question: this.get('question'),
      };
      this.set('updateMessageForm', false);
      this.sendAction('update', model, params);
    }
  }
});
