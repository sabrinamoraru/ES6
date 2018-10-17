var colors = ["red", "blue", "green"];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

colors.forEach(function(color) {
  console.log(color);
});

// Create an array of numbers
var numbers = [1, 2, 3, 4, 5];

// Create a variable to hold the sum
var sum = 0;

function adder(number) {
  sum += number;
}

// Loop over the array, incrementing the sum variable
numbers.forEach(adder);

// Print the sum variable
sum;

//15
