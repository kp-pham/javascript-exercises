const convertToCelsius = function(farenheit) {
  celsius = (farenheit - 32) * (5 / 9);
  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
