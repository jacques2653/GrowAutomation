var socket = io("http://localhost:5000");

socket.on("temperature", function (data) {
  document.getElementById("counter").innerHTML = data.toString();
});

window.addEventListener("load", function () {
  var button = document.getElementById("device1");

  button.addEventListener("click", function () {
    console.log("ping");
    socket.emit("device1");
  });

  var button2 = document.getElementById("setMaxDayTemperature");

  button2.addEventListener("click", function () {
    console.log("setMaxDayTemperature");
    socket.emit("setMaxDayTemperature");
  });

  var button3 = document.getElementById("setMinDayTemperature");

  button3.addEventListener("click", function () {
    console.log("setMinDayTemperature");
    socket.emit("setMinDayTemperature");
  });

  var button4 = document.getElementById("setMaxNightTemperature");

  button4.addEventListener("click", function () {
    console.log("setMaxNightTemperature");
    socket.emit("setMaxNightTemperature");
  });

  var button5 = document.getElementById("setMinNightTemperature");

  button5.addEventListener("click", function () {
    console.log("setMinNightTemperature");
    socket.emit("setMinNightTemperature");
  });

  var button6 = document.getElementById("updateMaxDayTemperature");

  button6.addEventListener("click", function () {
    console.log("updateMaxDayTemperature");
    socket.emit("updateMaxDayTemperature", { value: 20 });
  });

  var button7 = document.getElementById("updateMinDayTemperature");

  button7.addEventListener("click", function () {
    console.log("updateMinDayTemperature");
    socket.emit("updateMinDayTemperature", { value: 20 });
  });

  var button8 = document.getElementById("updateMaxNightTemperature");

  button8.addEventListener("click", function () {
    console.log("updateMaxNightTemperature");
    socket.emit("updateMaxNightTemperature", { value: 20 });
  });

  var button9 = document.getElementById("updateMinNightTemperature");

  button9.addEventListener("click", function () {
    console.log("updateMinNightTemperature");
    socket.emit("updateMinNightTemperature", { value: 20 });
  });
});
