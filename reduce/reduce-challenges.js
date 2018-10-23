// Ex 1: Distance Traveled
// use the ‘reduce’ helper to find the sum of all the distances traveled
// Assign the result to the var ‘totalDistance’

var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];

var totalDistance = trips.reduce(
  (previous, trip) => previous + trip.distance,
  0
);

// Ex 2: Reducing Properties
// use the 'reduce' helper to create an obj that tells the nr of sitting and standing desks
// the obj returned should have the form '{ sitting: 3, standing: 2}'
// the initial value has been provided to you
// hint: return the accumulator obj (the 1st argument to the iterator function)

var desks = [
  { type: "sitting" },
  { type: "standing" },
  { type: "sitting" },
  { type: "sitting" },
  { type: "standing" }
];

var deskTypes = desks.reduce(
  function(previous, desk) {
    if (desk.type === "sitting") {
      previous.sitting++;
    }
    if (desk.type === "standing") {
      previous.standing++;
    }
    return previous;
  },
  { sitting: 0, standing: 0 }
);

// Ex 3: Hardmode - Custom 'Unique' helper
// write a function called 'unique' that will remove all the duplicate values from an array
// use the 'reduce' and 'find' helper
// For e.g, given the following array
// var numbers = [1, 1, 2, 3, 4, 4];
// Your function should return [1, 2, 3, 4]

function unique(array) {
  return array.reduce((uniqueArr, currentNum) => {
    if (!uniqueArr.find(num => num === currentNum)) {
      uniqueArr.push(currentNum);
    }

    return uniqueArr;
  }, []);
}
