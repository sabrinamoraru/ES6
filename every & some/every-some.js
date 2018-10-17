// using a for loop
var computers = [
  { name: "Apple", ram: 24 },
  { name: "Compaq", ram: 4 },
  { name: "Acer", ram: 32 }
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
  var computer = computers[i];

  if (computer.ram < 16) {
    allComputersCanRunProgram = false;
  } else {
    onlySomeComputersCanRunProgram = true;
  }
}

("---");
allComputersCanRunProgram;
onlySomeComputersCanRunProgram;
("+++");

// output
// ---
// true
// false
// true

// refactored using the ***'every'*** helper
computers.every(function(computer) {
  return computer.ram > 16;
});
//  false

// the ***'some'*** helper

computers.some(function(computer) {
  return computer.ram > 16;
});
//true

// *** E.g 2 ***
var names = ["Sabrina", "Alex", "Alin"];

names.every(function(name) {
  return name.length > 4;
});

names.some(function(name) {
  return name.length > 4;
});

// false
// true

// practical use of every and some
// e.g 3
function Field(value) {
  this.value = value;
}

Field.prototype.validate = function() {
  return this.value.length > 0;
};

var username = new Field("2cool");
var password = new Field("my_password");
var birthdate = new Field("20/11/1994");

// username.validate();
//true
// var username = new Field(""); --- if I remove all the characters then it's false

var fields = [username, password, birthdate];

var formIsValid = fields.every(function(field) {
  return field.validate();
});

if (formIsValid) {
  //allow user to submit!
} else {
  // show an error message
}
