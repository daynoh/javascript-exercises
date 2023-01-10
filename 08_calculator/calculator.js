const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a + b
};

const sum = function(array) {
	let sum = 0
  array.forEach(element => {
    sum += element
  });
  return sum
};

const multiply = function(a, b) {
  return a*b
};

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(a) {
	if (n=== 0) return 1;
  let ans = 1;
  for (let i = a; i > 0; i--){
    ans = ans*i
  }
  return ans

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
