const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((accumulator, number) => accumulator + number, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((accumulator, number) => accumulator * number, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
  if (n === 0 || n === 1)
    return 1;

  else
    return n * factorial(n - 1);

  // let product = 1;
  // for (let i = n; i > 0; i--) {
  //   product *= i;
  // }
  // return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
