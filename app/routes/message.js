import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('message', params.message_id);
  },
  actions: {
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
      var message = params.message;
      message.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return message.save();
      });
      this.transitionTo('message', message);
    },

    destroyMessage(message) {
      message.destroyRecord();
      this.transitionTo('index');
    }
  }
});
