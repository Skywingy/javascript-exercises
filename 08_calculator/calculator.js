const add = function(a, b) {
  let adds = a + b;
  return adds;
};


const subtract = function(a, b) {
  let sub = a - b;
  return sub;
	
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);

};


const multiply = function(array) {
  return array.reduce((total, current) => total * current, 1);
};

const power = function(base, power) {
	return Math.pow(base, power);
};

const factorial = function(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    for (let i = 1;  i <= number ; i++) {
      number = number * i;
    }
    return number;
  }
	
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
