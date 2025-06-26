const convertToCelsius = function(farenheit) {
  // celsius = (farenheit - 32) * (5 / 9);
  // return parseFloat(celsius.toFixed(1));
  return Math.round((farenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  // farenheit = celsius * (9 / 5) + 32;
  // return parseFloat(farenheit.toFixed(1));
  return Math.round(((celsius* (9 / 5) + 32) * 10)) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
