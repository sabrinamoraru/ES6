// Ex 1
// Refactor the following function to use the rest operator
// remember, an argument using the rest operator does NOT need to be called 'rest'
/*
  function product(a, b, c, d, e) {
    var numbers = [a, b, c, d, e];

    return numbers.reduce(function(acc, numebr) {
      return acc * numbers;
    }, 1);
  }
  */

function product(...numbers) {
  return numbers.reduce((acc, number) => {
    return acc * number;
  }, 1);
}

// Ex 2
// refactor the following to use the spread operator
/*
function join(array1, array2) {
  return array1.concat(array2);
}
*/

const join = (array1, array2) => [...array1, ...array2];

// Ex 3
// refactor the following code to use the rest operator
/*
function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}
*/

function unshift(array, ...rest) {
  return [...rest, ...array];
}
