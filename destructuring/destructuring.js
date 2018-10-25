// Destructuring makes possible to unpack values from arrays, or properties from objects, into distinct variables.
var a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: [30,40,50]

// E.g 1
var expense = {
  type: "Business",
  amount: "$45 USD"
};

var type = expense.type;
var amount = expense.amount;

// ES6 - destructuring
var expense = {
  type: "Business",
  amount: "$45 USD"
};

const { type, amount } = expense;
type;
amount;
//Business
//$45 USD

// E.g 2
var savedFiled = {
  extension: "jpg",
  name: "repost",
  size: 14040
};

function fileSummary(file) {
  return `The file ${file.name}.${file.extension} is of size ${file.size}`;
}

fileSummary(savedFiled);
// The file repost.jpg is of size 14040

// E.g 2 - ES6 - destructuring Arguments Objects
var savedFiled = {
  extension: "jpg",
  name: "repost",
  size: 14040
};

function fileSummary({ name, extension, size }) {
  return `The file ${name}.${extension} is of size ${size}`;
}

fileSummary(savedFiled);
// The file repost.jpg is of size 14040

// Eg 3 - Destructuring Arrays
const companies = ["Google", "Facebook", "Uber"];

const [name, name2, name3] = companies;
name;
name2;
name3;
// Google
// Facebook
// Uber

// accessing the first company
const companies = ["Google", "Facebook", "Uber"];

const [name] = companies;
const firstCompany = companies[0];

// accessing with rest
const companies = ["Google", "Facebook", "Uber"];

const [name, name2, ...rest] = companies;
name;
name2;
rest;

// Google
// Facebook
// ["Uber"]

// E.g 4
const companies = [
  { name: "Google", location: "Mountain View" },
  { name: "Facebook", location: "Menlo Park" },
  { name: "Uber", location: "San Francisco" }
];

var location = companies[0].location;
location;
// Mountain View

// E.g 4 - Destructuring Arrays and Objects *at the same time
const companies = [
  { name: "Google", location: "Mountain View" },
  { name: "Facebook", location: "Menlo Park" },
  { name: "Uber", location: "San Francisco" }
];

const [{ location }] = companies;
location;
// Mountain View

// another e.g
const Google = {
  locations: ["Mountain View", "New York", "London"]
};

const {
  locations: [location]
} = Google;
location;
// Mountain View

// When to use Destructuring
function signup({ username, password, email, dateOfBirth, city }) {
  // create new user
}

// other code
// other code
// other code
// other code
// other code
// other code
// other code
// other code
// other code

const user = {
  username: "myname",
  password: "mypassword",
  email: "myemail@example.com",
  dateOfBirth: "20/11/1994",
  city: "New York"
};

signup(user);

// another e.g
const points = [[4, 5], [10, 1], [0, 40]];

[{ x: 4, y: 5 }, { x: 10, y: 1 }, { x: 0, y: 40 }];
// [{"x":4,"y":5},{"x":10,"y":1},{"x":0,"y":40}]

// using ES6
const points = [[4, 5], [10, 1], [0, 40]];

points.map(([x, y]) => {
  return { x, y };
});
// [{"x":4,"y":5},{"x":10,"y":1},{"x":0,"y":40}]
