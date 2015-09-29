var five = require("../");
var board = new five.Board();

board.on("ready", function() {
  var barometer = new five.Barometer({
    controller: "PHOTON_WEATHER_SHIELD"
  });

  barometer.on("change", function() {
    console.log("barometer");
    console.log("  pressure     : ", this.pressure);
    console.log("--------------------------------------");
  });
});
