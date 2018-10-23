// A constant E.g of Letting Variables be Variables

// imagine you are building an app to manage a user's Facebook profile
// a profile might have a 'name', 'age', and 'dateOfBirth'
// declare 3 variables with these same names, making sure to use 'const' or 'let',
// depending on whether you expect the value to change over time

const name = "Sabrina";
const dateOfBirth = "20111994";
let age = 23;

// Ex 2: Const/Let Refactoring

// var statuses = [
//   { code: "OK", response: "Request successful" },
//   { code: "FAILED", response: "There was an error with your request" },
//   { code: "PENDING", response: "Your reqeust is still pending" }
// ];
// var message = "";
// var currentCode = "OK";

// for (var i = 0; i < statuses.length; i++) {
//   if (statuses[i].code === currentCode) {
//     message = statuses[i].response;
//   }
// }

// refactored:
const statuses = [
  { code: "OK", response: "Request successful" },
  { code: "FAILED", response: "There was an error with your request" },
  { code: "PENDING", response: "Your reqeust is still pending" }
];

let message = "";
let currentCode = "OK";

for (var i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}
