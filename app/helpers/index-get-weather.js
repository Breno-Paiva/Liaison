import Ember from 'ember';

export function indexGetWeather(params/*, hash*/) {
  $.ajax({
    type: "GET",
    url: 'http://api.openweathermap.org/data/2.5/weather?',
    data: {  'location': `lat=40.7697510&lon=73.9545870`}
  }).then(ans => console.log(ans))
  // }).then(ans => $('.weather').val(ans.data.translations[0].translatedText))
}

export default Ember.Helper.helper(indexGetWeather);
