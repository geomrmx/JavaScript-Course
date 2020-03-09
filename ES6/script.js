/**
 * `let` and `const`
 */
/*
// ES5
var name5 = "Jane Smith";
var age5 = 23;
name5 = "Jane Miller";
console.log(name5);

// ES6
const name6 = "Jane Smith"; // Can't be updated later
let age6 = 23;
name6 = "Jane Miller"; // Making assignment error
console.log(name6);

// ES5
function driversLicence(passedTest) {
  if (passedTest) {
    var firstName = "John";
    var yearOfBirth = 1990;
  }

  console.log(
    firstName +
      ", born in " +
      yearOfBirth +
      ", is now officially allowed to drive a car."
  );
}

driversLicence(true);

// ES6
function driversLicence(passedTest) {
  if (passedTest) {
    let firstName = "John";
    const yearOfBirth = 1990;
  }

  console.log(
    firstName +
      ", born in " +
      yearOfBirth +
      ", is now officially allowed to drive a car."
  ); // Making reference error
}

driversLicence(true);
*/

/**
 * Blocks and IIFEs
 */
/*
// ES6
{
  const a = 1;
  let b = 2;
  var c = 3;
}

// console.log(a + b); // Making reference error
console.log(c);

// ES5
(function() {
  var c = 3;
})();

console.log(c);
*/

/**
 * Strings
 */

let firstName = "John";
let lastName = "Smith";
const yearOfBirth = 1990;

function calcAge(year) {
  return 2020 - year;
}

// ES5
console.log(
  "This is " +
    firstName +
    " " +
    lastName +
    ". He was born in " +
    yearOfBirth +
    ". Today, he is " +
    calcAge(yearOfBirth) +
    " years old."
);

// ES6
console.log(
  `This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(
    yearOfBirth
  )} years old.`
);

const name = `${firstName} ${lastName}`;
console.log(name.startsWith("j"));
console.log(name.endsWith("th"));
console.log(name.includes("oh"));
console.log(`${firstName}`.repeat(5));
