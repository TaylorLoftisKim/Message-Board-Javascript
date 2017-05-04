import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  content: DS.attr(),
  message: DS.belongsTo('message', { async: true })
});
