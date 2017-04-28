import Ember from 'ember';

var messages = [{
  id: 1,
  user: "Veruca Salt",
  question: "What dependecies must I install before writing a Javascript app?",
  answer: "Estate",
  image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"
}, {
  id: 2,
  user: "Mike TV",
  question: "Seattle",
  answer: "Condo",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg"
}, {
  id: 3,
  user: "Violet Beauregarde",
  question: "Portland",
  answer: "Apartment",
  image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg"
}];

export default Ember.Route.extend({
  model() {
    return messages;
  },
});
