// An arrow function expression has a shorter syntax than a function expression
// and does not have its own this, arguments, super, or new.target.
//These function expressions are best suited for non-method functions,
//and they cannot be used as constructors.

var materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]

// E.g 1
const add = function(a, b) {
  return a + b;
};

add(1, 2);

// arrow function
const add = (a, b) => {
  return a + b;
};

add(1, 2);

// alternative syntax - implicit return of the function
//  (when we remove the curly braces and the return keyword)

const add = (a, b) => a + b;

add(1, 2);

// E.g 2
const double = function(number) {
  return 2 * number;
};

double(8);
//16

// refactor Eg 2 using arrow function - one argument
const double = number => 2 * number;

double(8);

// E.g 3 with two arguments
const double = (number1, number2) => {
  return 2 * number1 + 2 * number2;
};

double(8, 4);
// 24

// Eg 4
const numbers = [1, 2, 3];

numbers.map(function(number) {
  return 2 * number;
});
// [2,4,6]

// Eg 4 - refactored to arrow function
const numbers = [1, 2, 3];
numbers.map(number => 2 * number);

// Eg 5 - when to use arrow function
const team = {
  members: ["Jane", "Bill"],
  teamName: "Super Squad",
  teamSummary: function() {
    return this.members.map(function(member) {
      return `${member} is on team ${this.teamName}`;
    });
  }
};

team.teamSummary();
// TypeError: Cannot read property 'teamName' of undefined

// we could fix it by using the bind helper
const team = {
  members: ["Jane", "Bill"],
  teamName: "Super Squad",
  teamSummary: function() {
    return this.members.map(
      function(member) {
        return `${member} is on team ${this.teamName}`;
      }.bind(this)
    );
  }
};

team.teamSummary();
//["Jane is on team Super Squad","Bill is on team Super Squad"]

// alternative with Arrow Functions
const team = {
  members: ["Jane", "Bill"],
  teamName: "Super Squad",
  teamSummary: function() {
    return this.members.map(member => {
      return `${member} is on team ${this.teamName}`;
    });
  }
};

team.teamSummary();
//["Jane is on team Super Squad","Bill is on team Super Squad"]
