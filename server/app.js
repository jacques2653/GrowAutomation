const express = require("express");
const socket = require("socket.io");
const PORT = 5000;
const app = express();
const server = app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
const io = socket(server);

const redis = require("socket.io-redis");
io.adapter(redis({ host: "localhost", port: 6379 }));

const { Connection } = require("./classes/mongodb.class.js");
const temperature = require("./classes/temperature.class.js");

const Gpio = require("onoff").Gpio;
const led = new Gpio(17, "out");

app.use(express.static("public"));

Connection.connectToMongo();

io.on("connection", function (socket) {
  console.log("Made socket connection");
  socket.on("device1", function (data) {
    console.log("Device 1 "+data);
    if (data) {
      led.writeSync(1);
    } else {
      led.writeSync(0);
    }
  });

  // Set Temperatures
  socket.on("setMaxDayTemperature", function (data) {
    temperature.setMaxDayTemperature().then(function(res){
      console.log({ Reponse: res })
    });
  });

  socket.on("setMinDayTemperature", function (data) {
    temperature.setMinDayTemperature().then(function(res){
      console.log({ Reponse: res })
    });
  });

  socket.on("setMaxNightTemperature", function (data) {
    temperature.setMaxNightTemperature().then(function(res){
      console.log({ Reponse: res })
    });
  });

  socket.on("setMinNightTemperature", function (data) {
    temperature.setMinNightTemperature().then(function(res){
      console.log({ Reponse: res })
    });
  });

  // Update Temperatures
  socket.on("updateMaxDayTemperature", function (data) {
    temperature.updateMaxDayTemperature(data.value).then(function(res){
      console.log({ Reponse: res })
    });
  });

  socket.on("updateMinDayTemperature", function (data) {
    temperature.updateMinDayTemperature(data.value).then(function(res){
      console.log({ Reponse: res })
    });
  });

  socket.on("updateMaxNightTemperature", function (data) {
    temperature.updateMaxNightTemperature(data.value).then(function(res){
      console.log({ Reponse: res })
    });
  });

  socket.on("updateMinNightTemperature", function (data) {
    temperature.updateMinNightTemperature(data.value).then(function(res){
      console.log({ Reponse: res })
    });
  });
  
});
