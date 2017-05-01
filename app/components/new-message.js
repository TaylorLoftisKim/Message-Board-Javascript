import Ember from 'ember';

export default Ember.Component.extend({
  addNewMessage: false,
  actions: {
    messageFormShow() {
      this.set('addNewMessage', true);
    },
    
    saveMessage() {
      var params = {
        user: this.get('user'),
        question: this.get('question'),
      };
      this.set('addNewMessage', false);
      this.sendAction('saveMessage', params);
    }
  }
});
