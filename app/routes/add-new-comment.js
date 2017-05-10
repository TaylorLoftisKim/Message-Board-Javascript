import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      newCar.save();
      this.transitionTo('index');
    }
  }
});
