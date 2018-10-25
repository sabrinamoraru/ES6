// The ***rest*** parameter syntax allows us to represent an
// indefinite number of arguments as an array.

function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10

// Spread syntax allows an iterable such as an array expression/string
// to be expanded in places where 0 or more arguments (for function calls)
// or elements (for array literals) are expected,
//or an object expression to be expanded in places where 0 or more key-value pairs (for object literals) are expected.
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6

// Eg 1
function addNumbers(a, b, c, d, e) {
  const numbers = [a, b, c, d, e];
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers(1, 2, 3, 4, 5, 6, 7);
// 15

// Eg 1 using rest operator
function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// 55

// Eg 2
const defaultColors = ["red", "green"];
const userFavoriteColors = ["orange", "yellow"];

defaultColors.concat(userFavoriteColors);
// ["red","green","orange","yellow"]

// Eg 2 - spread operator
const defaultColors = ["red", "green"];
const userFavoriteColors = ["orange", "yellow"];

[...defaultColors, ...userFavoriteColors];
// ["red","green","orange","yellow"]

// Eg 2 - spread operator more complex
const defaultColors = ["red", "green"];
const userFavoriteColors = ["orange", "yellow"];
const fallColors = ["fire red", "fall orange"];

["green", "blue", ...fallColors, ...defaultColors, ...userFavoriteColors];
// ["green","blue","fire red","fall orange","red","green","orange","yellow"]

// Eg 3
function validateShoppingList(...items) {
  if (items.indexOf("milk") < 0) {
    return ["milk", ...items];
  }

  return items;
}

validateShoppingList("oranges", "bread", "eggs");
// ["milk","oranges","bread","eggs"]

// Practical e.g 4
const MathLibrary = {
  calculateProduct(a, b) {
    return a * b;
  },
  multiply(a, b) {
    return a * b;
  }
};

// e.g 4 - rest & spread operator
const MathLibrary = {
  calculateProduct(...rest) {
    console.log("Please use the multiply method instead");
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  }
};
