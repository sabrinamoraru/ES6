// filter the array of numbers using the filter helper
// create a new array that only contains numbers > 50
// assign this new array to a variable called 'filteredNumbers'

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(number) {
  return number > 50;
});

/////// Challenge 2

// Filter the array of users
// return only users who have admin level access
// assign the result to the variable 'filteredUsers'

var users = [
  { id: 1, admin: true },
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true }
];

var filteredUsers = users.filter(function(user) {
  return user.admin;
});

///// Chalenge 3

// create a function 'reject'
// should work in the opposite way of 'filter'
// if a function returns 'true', the item should *not* be included in the new array
// hint: you can reuse filter

// E.g:

var numbers = [10, 20, 30];
var lessThanFifteen = reject(numbers, function(number) {
  return number > 15;
});
lessThanFifteen; // [10];

//solved

function reject(array, iteratorFunction) {
  return array.filter(array => {
    return !iteratorFunction(array);
  });
}
