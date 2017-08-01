import Ember from 'ember';
import config from '../config/environment';
var translateKey = config.translateKey

export default Ember.Component.extend({
  classNames: ['translate'],
  actions: {
    translate(fromLang, toLang, val){
      let info = "translate " + val + " in " + fromLang + " to " + toLang
      let toLangClass = '.' + toLang
      $.ajax({
        type: "POST",
        url: "https://translation.googleapis.com/language/translate/v2",
        data: {  'q': val, 'target': toLang, 'key': translateKey}
      }).then(ans => $(toLangClass).val(ans.data.translations[0].translatedText))
    }
  }
});
