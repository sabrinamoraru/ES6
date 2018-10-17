// The map() method creates a new array
// with the results of calling a provided function
// on every element in the calling array.

var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

// Write a loop that iterates over a list of numbers,
// doubles the value of each number in the array
// then pushes that doubled number into a new array
var numbers = [1, 2, 3];
var doubledNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

doubledNumbers;

// refactored

var numbers = [1, 2, 3];
var doubledNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

var doubled = numbers.map(function(number) {
  return number * 2;
});

doubled;
doubledNumbers;

/*
3
3
[2,4,6]
[2,4,6]
*/

// each number in the numbers array is being passed into the anonymous function that we are passing it
//wherever this function returns line 35, is placed into a new array after each element has been processed, that new array is returned

var cars = [
  { model: "Dacia", price: "CHEAP" },
  { model: "Lamborghini", price: "expensive" }
];

var prices = cars.map(function(car) {
  return car.price;
});

prices;

// output
//   ["CHEAP","expensive"]
