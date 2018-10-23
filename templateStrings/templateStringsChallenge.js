// refactor the function to use template strings
function doubleMessage(number) {
  return "Your number doubled is " + 2 * number;
}

//refactored
function doubleMessage(number) {
  return `Your number doubled is ${number * 2}`;
}

// Ex 2: Name Helpers
// Refactor the function to use template strings
function fullName(firstName, lastName) {
  return firstName + lastName;
}

// refactored
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
