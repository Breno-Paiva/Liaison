
let nyt = new Date().toLocaleTimeString("en-US", {timeZone: "America/New_York"})
let prt = new Date().toLocaleTimeString("en-US", {timeZone: "Europe/Paris"})
$("#time").load("time.html", function(){
  $("#NYC-time").html(nyt);
  $("#Paris-time").html(prt);
});
