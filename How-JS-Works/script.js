/**
 * Hoisting
 */
/*
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
*/

/**
 * Scoping
 */
/*
// First scoping example
var a = "Hello";
first();

function first() {
  var b = "Hi";
  second();

  function second() {
    var c = "Hey";
    third();
  }
}

function third() {
  var d = "John";
  // console.log(c);
  console.log(a + d);
}
*/

/**
 * The `this` keyword
 */

console.log(this);
calculateAge(1985);

function calculateAge(year) {
  console.log(2020 - year);
  console.log(this);
}

var john = {
  name: "John",
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this);
    console.log(2020 - this.yearOfBirth);

    function innerFunction() {
      console.log(this);
    }
    innerFunction();
  }
};

john.calculateAge();

var mike = {
  name: "Mike",
  yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();
