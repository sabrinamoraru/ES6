// Ex 1 - Refactoring Keyword Functions
// refactor the code below to use a fat arrow function
/* 
    const fibonacci = function(n) {
      if (n < 3) return 1;
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
    */

// rules of fat Arrow Functions
// 1. If the function has a single expression in its body, the curly bracces and 'return' keyword can be removed
// 2. If the function has a single argument, the () around the argument list can be removed

const fibonacci = n => (n < 3 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));

// or

const fibonacci = n => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

fibonacci();

// Ex 2
// the code below has an object that represents a user profile
// the profile has a 'name' currently
// add another key to this object called 'getName'
// getName should be a function that returns the profiles name, using 'this.name'
/*
    const profile = {
      name: "Alex"
    };
    */

const profile = {
  name: "Alex",
  getName: function() {
    return this.name;
  }
};
profile.getName();
