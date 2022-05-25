const add = function(...numbers) {
  return numbers.reduce((tot, num) => {return tot + num;}, 0);	
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(numbers) {
  return add(...numbers);
};

const multiply = function(numbers) {
  return numbers.reduce((tot, num) => {return tot * num;}, 1);
};

const power = function(base, pow) {
  let arr = [];
  for(let i = 0; i < pow; i++) { arr.push(base); }

  return multiply(arr);	
};

const factorial = function(num) {
  if (num == 0) { return 1; }
  return num * (factorial(num-1));  
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
