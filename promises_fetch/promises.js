// The Promise object represents the eventual completion (or failure) of an asynchronous operation,
//  and its resulting value.

var promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("foo");
  }, 300);
});

promise1.then(function(value) {
  console.log(value);
  // expected output: "foo"
});

console.log(promise1);
// expected output: [object Promise]

// another E.g
promise = new Promise((resolve, reject) => {
  resolve();
});

// or reject
promise = new Promise((resolve, reject) => {
  reject();
});

// Then and Catch - resolve
promise = new Promise((resolve, reject) => {
  resolve();
});

promise
  .then(() => console.log("finally finished!"))
  .then(() => console.log("I was also ran!!!"))
  .catch(() => console.log("uh oh!!"));
//finally finished!
//I was also ran!!!

// Then and Catch - reject
promise = new Promise((resolve, reject) => {
  reject();
});

promise
  .then(() => console.log("finally finished!"))
  .then(() => console.log("I was also ran!!!"))
  .catch(() => console.log("uh oh!!"));
//uh oh!!

// Async code with Promises - resolve
promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});

promise
  .then(() => console.log("finally finished!"))
  .then(() => console.log("I was also ran!!!"))
  .catch(() => console.log("uh oh!!"));
// Promise pending
// after 3s
//finally finished!
//I was also ran!!!

// Async code with Promises - reject
promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
});

promise
  .then(() => console.log("finally finished!"))
  .then(() => console.log("I was also ran!!!"))
  .catch(() => console.log("uh oh!!"));
// Promise pending
// after 3s
//uh oh!!

// e.g
promise = new Promise((resolve, reject) => {
  var request = new XHTMLRequest();
  // make request
  request.onload = () => {
    resolve();
  };
});

promise
  .then(() => console.log("finally finished!"))
  .then(() => console.log("I was also ran!!!"))
  .catch(() => console.log("uh oh!!"));

// Ajax Requests with Fetch
url = "https://jsonplaceholder.typicode.com/posts/";

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));

// Shortcomings of Fetch
url = "https://jsonplaceholder.typicode123.com/posts123456/";

fetch(url)
  .then(response => console.log(response))
  .catch(error => console.log("BAD", error));
