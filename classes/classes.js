// JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JS's existing prototype-based inheritance.
// The class syntax does not introduce a new object-oriented inheritance model to JavaScript.
// Classes are in fact "special functions", and just as you can define function expressions and function declarations,
// the class syntax has two components: class expressions and class declarations.

// E.g 1
function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function() {
  return "vroom";
};

function Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
  return "beep";
};

const toyota = new Toyota({ color: "red", title: "Daily Driver " });
("---");
toyota;
toyota.drive();
toyota.honk();
// {}
// Function Toyota
// ---
// {"title":"Daily Driver ","color":"red"}
// vroom
// beep

// E.g 1 - refactored using ES6 classes
class Car {
  constructor({ title }) {
    this.title = title;
  }

  drive() {
    return "vroom";
  }
}

class Toyota extends Car {
  constructor(options) {
    super(options);
    this.color = options.color;
  }

  honk() {
    return "beep";
  }
}

const toyota = new Toyota({ color: "red", title: "Daily Driver" });
("---");
toyota.honk();
toyota.drive();
toyota;
// ---
// beep
// vroom
// {"title":"Daily Driver","color":"red"}
