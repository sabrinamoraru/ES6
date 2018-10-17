// Challenge 1 - Finding Submitted Users
// given an array of users
// return true if every user has submitted a request form
// assign the result tot the var 'hasSubmitted'

var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(function(user) {
  return user.hasSubmitted === true;
});

// Challenge 2 - In Progress Newtwork Requests
// given an array of newtwork objects representing network requests
// assign the boolean 'true' to the variable 'inProgress'
// if any network request has a 'status' of 'pending'
