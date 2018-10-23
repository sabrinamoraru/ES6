var numbers = [10, 20, 30];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);

// E.g 2

var primaryColors = [{ color: "red" }, { color: "yellow" }, { color: "blue" }];

// ['red', 'yellow', 'blue']

primaryColors.reduce(function(previous, primaryColors) {
  previous.push(primaryColors.color);

  return previous;
}, []);

// E.g 3
// You are given a string of characters like “() () () () “ and you have to write a function that decides whether or not the parentheses in this expression is balanced

function balancedParens(string) {
  return !string.split("").reduce(function(previous, char) {
    if (previous < 0) {
      return previous;
    }
    if (char === "(") {
      return ++previous;
    }
    if (char === ")") {
      return --previous;
    }
    return previous;
  }, 0);
}

balancedParens("()");
