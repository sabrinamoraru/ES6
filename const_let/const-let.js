var color = "red";
color;

// red

// *** constants *** are block-scoped, much like variables defined using the let statement.
// The value of a constant cannot change through reassignment, and it can't be redeclared.

const number = 42;

try {
  number = 99;
} catch (err) {
  console.log(err);
  // expected output: TypeError: invalid assignment to const `number'
  // Note - error messages will vary depending on browser
}

console.log(number);
// expected output: 42

// *** let *** statement declares a block scope local variable,
// optionally initializing it to a value.

let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 1

// E.g 1:
var name = "Sabrina";
var title = "Software Engineer";
var hourlyWage = 40;

// ES6
const name = "Sabrina";
let title = "Software Engineer";
let hourlyWage = 40;

// some time later...

title = "Senior Software Engineer";
hourlyWage = 45;

// E.g

function count(targetString) {
  const characters = ["a", "e", "i", "o", "u"];
  let number = 0;

  for (var i = 0; i < targetString.length; i++) {
    if (characters.includes(targetString[i])) {
      number++;
    }
  }

  return number;
}

count("aeiofdfdfdflksdsnds");

// e.g

function buildExpressions(code) {
  var transformedCode = JSKTransformer.transform(code).code;
  var codeByLine = transformedCode.split("/n");
}
