import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['translate'],
  actions: {
    translate(fromLang, toLang, val){
      let info = "translate " + val + " in " + fromLang + " to " + toLang
      console.log(info)
      console.log(to)
      let to = '.' + toLang
      $(to).val(info)
    }
  }
});
