/**
 * Hoisting
 */

// functions
calculateAge(1965);

function calculateAge(year) {
  console.log(2020 - year);
}

// retirement(1999);    // Makes uncaught TypeError: retirement

var retirement = function(year) {
  console.log(65 - (2020 - year));
};

// variables
console.log(age); // Undefined if `age` is declared later. If it's not declared, making error.
var age = 23;
