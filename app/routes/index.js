import Ember from 'ember';

var messages = [{
  id: 1,
  user: "Timmy",
  question: "How to install Ember?"
}, {
  id: 2,
  user: "Megan",
  question: "What is html?"
}, {
  id: 3,
  user: "Brian",
  question: "How do I install packages on Atom?"
}];

export default Ember.Route.extend({
  model() {
    return messages;
  },
});
