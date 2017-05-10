import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  question: DS.attr(),
  comment: DS.hasMany('comment', { async: true })
});
