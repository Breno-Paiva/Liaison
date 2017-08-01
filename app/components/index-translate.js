import Ember from 'ember';
import config from '../config/environment';
var translateKey = config.translateKey

export default Ember.Component.extend({
  classNames: ['translate'],
  actions: {
    translate(fromLang, toLang, val){
      let info = "translate " + val + " in " + fromLang + " to " + toLang
      let toLangClass = '.' + toLang
      console.log(translateKey)
      $(toLangClass).val(info)
    }
  }
});
