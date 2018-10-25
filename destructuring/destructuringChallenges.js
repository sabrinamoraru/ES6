// Exercise 1
// The snippet of code below duplicates references to 'profile' inside of 'isEngineer' function
// reduce the amount of code used for referencing the 'title' and 'department' properties
// refactor this code to use destructuring
// get the body of the 'isEngineer' function down to a single line
/*
  const profile = {
    title: 'Engineer',
    department: 'Engineering'
  };

  function isEngineer(profile) {
    var title = profile.title;
    var department = profile.department;
    return title === 'Engineer' && department === 'Engineering';
  }
  */

function isEngineer({ title, department }) {
  return title === "Engineer" && department === "Engineering";
}

// or
const profile = {
  title: "Engineer",
  department: "Engineering"
};

const isEngineer = ({ title, department } = profile) =>
  title === "Engineer" && department === "Engineering";

// Exercise 2 - Array Destructuring in Practice
// the 'classes' variable holds an array of arrays, where each array represents a single class that a student is enrolled in
// convert this array of arrays into an array of objects, where each object has the keys 'subject', 'time' and 'teacher'
// assign the result to 'classesAsObject'
// use array destructuring and the map helper

// an array for a class has the form [subject, time, teacher]
// the resulting data structure should look something like:
// const classesAsObject = [{ subject: 'Geography', time: '2PM', teacher: 'Mrs. Larsen' }]
/*
  const classes = [
    [ 'Chemistry', '9AM', 'Mr. Darnick' ],
    [ 'Physics', '10:15AM', 'Mrs. Lithun'],
    [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
  ];

  const classesAsObject;
  */

const classes = [
  ["Chemistry", "9AM", "Mr. Darnick"],
  ["Physics", "10:15AM", "Mrs. Lithun"],
  ["Math", "11:30AM", "Mrs. Vitalis"]
];

const classesAsObject = classes.map(([subject, time, teacher]) => ({
  subject,
  time,
  teacher
}));

// Exercise 3 - Recursion with Destructuring
// use array destructuring, recursion and the rest/spread operator
// create a function 'double' that will return a new array with all balues inside of it multiplied by 2; do NOT use any array helpers
// input: double([1,2,3])
// output: [2,4,6]
// remember, with recursion you must add a base case so you don't get an infinite call stack
/*
    const numbers = [1, 2, 3];
    function double() {}
    */
const numbers = [1, 2, 3];

function double([number, ...rest]) {
  if (number === undefined) {
    return [];
  }
  return [number * 2, ...double(rest)];
}

// or
const numbers = [1, 2, 3];

function double([b, ...rest]) {
  return rest.length ? [b * 2, ...double(rest)] : [b * 2];
}
