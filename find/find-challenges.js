// *** Challenge 1 ***

// Find the user in the user's array who is an admin
// Assign this user to the variable 'admin'

var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(function(user) {
  return user.admin === true;
});

// *** Challenge 2 ***

// Find the account with a balance of 12
//  assign it to the variable 'account'

var accounts = [{ balance: -10 }, { balance: 12 }, { balance: 0 }];

var account = accounts.find(function(account) {
  return account.balance === 12;
});

// *** Challenge 3 *** Custom findWhere Helper
// Write a 'findWhere' function that achieves this shorthand approach
// 'findWhere' should return the found object

// the most common find operation is to an object that has a given property
// rather than writing out a full function every time,
// shorthand syntax to find an object like this:
// findwhere(ladders, { height: '20 feet });

// The object { ladders: '20 feet' } should be used as the search criteria
// find a ladder whose 'height' property was '20 feet;

function findWhere(array, criteria) {
  return array.find(obj => {
    return obj.height === criteria.height;
  });
}
