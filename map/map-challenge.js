// Using map, create a new array that contains the 'height' propery of each object
// Assign this new array to the variable 'heights'

var images = [
  { height: "34px", width: "39px" },
  { height: "54px", width: "19px" },
  { height: "83px", width: "75px" }
];

var heights;

var heights = images.map(image => {
  return image.height;
});

heights;

///////// challenge 2

// using map, create a new array that contains the distance / time value from each trip
// the new array should contain the (distance / time) value
// asign the result to the variable 'speeds'

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds;

var speeds = trips.map(trip => {
  return trip.distance / trip.time;
});

speeds;

/////// challenge 3
// Implement a 'pluck' function
// pluck should accept an array and a string representing a property name and
// return an array containing that property from each object

/*
E.g:
var paints = [{ color: "red" }, { color: "blue" }, { color: "yellow" }];
pluck(paints, "color"); //returns ['red', 'yellow', 'blue'];
*/

var paints = [{ color: "red" }, { color: "blue" }, { color: "yellow" }];

function pluck(array, property) {
  var plucked = array.map(function(obj) {
    return obj[property];
  });

  return plucked;
}

console.log(pluck(paints, "color"));
