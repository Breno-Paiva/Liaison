import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['translate'],
  actions: {
    translate(fromLang, toLang, val){
      console.log(val)
      let info = "translate " + fromLang + " to " + toLang
      console.log(info)
    }
  }
});
