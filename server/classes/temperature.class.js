const sensor = require("ds18b20-raspi");
const { Connection } = require("./mongodb.class.js");

const readTemperature = async () => {
  return sensor.readSimpleC();
};

// Set temperatures
const setMaxDayTemperature = async () => {
  Connection.db
    .collection("temperature")
    .insertOne({
      type: "maxDayTemperature",
      value: 27.5,
    })
    .then(function (result) {
      return { status: 200, message: 'Successfully set max day temperature' };
    });
};

const setMinDayTemperature = async () => {
  Connection.db
    .collection("temperature")
    .insertOne({
      type: "minDayTemperature",
      value: 22.5,
    })
    .then(function (result) {
      return { status: 200, message: 'Successfully set min day temperature' };
    });
};

const setMaxNightTemperature = async () => {
  Connection.db
    .collection("temperature")
    .insertOne({
      type: "maxNightTemperature",
      value: 22.5,
    })
    .then(function (result) {
      return { status: 200, message: 'Successfully set max night temperature' };
    });
};

const setMinNightTemperature = async () => {
  Connection.db
    .collection("temperature")
    .insertOne({
      type: "minNightTemperature",
      value: 18.5,
    })
    .then(function (result) {
      return { status: 200, message: 'Successfully set min night temperature' };
    });
};

// Update temperatures
const updateMaxDayTemperature = async (temperature) => {
  console.log({ UpdatedTemperature: temperature })
  var myquery = { type: "maxDayTemperature" };
  var newvalues = {$set: {value: temperature} };
  Connection.db
    .collection("temperature").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
  });
  return { status: 200, message: 'Successfully updated max day temperature' };
};

const updateMinDayTemperature = async (temperature) => {
  var myquery = { type: "minDayTemperature" };
  var newvalues = {$set: {value: temperature} };
  Connection.db
    .collection("temperature").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
  });
  return { status: 200, message: 'Successfully updated min day temperature' };
};

const updateMaxNightTemperature = async (temperature) => {
  var myquery = { type: "maxNightTemperature" };
  var newvalues = {$set: {value: temperature} };
  Connection.db
    .collection("temperature").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
  });
  return { status: 200, message: 'Successfully updated max night temperature' };
};

const updateMinNightTemperature = async (temperature) => {
  var myquery = { type: "minNightTemperature" };
  var newvalues = {$set: {value: temperature} };
  Connection.db
    .collection("temperature").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
  });
  return { status: 200, message: 'Successfully updated min night temperature' };
};

module.exports = {
  readTemperature,
  setMaxDayTemperature,
  setMinDayTemperature,
  setMaxNightTemperature,
  setMinNightTemperature,
  updateMaxDayTemperature,
  updateMinDayTemperature,
  updateMaxNightTemperature,
  updateMinNightTemperature
};
