import Ember from 'ember';

export function indexGiveTime(params/*, hash*/) {
    let nyt = new Date().toLocaleTimeString("en-US", {timeZone: "America/New_York"})
    setTimeout(() => indexGiveTime(), 1000)
    $(".give-time").html(nyt);
}

export default Ember.Helper.helper(indexGiveTime);
