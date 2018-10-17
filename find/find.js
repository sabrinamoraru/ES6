// The find() method returns the value
// of the first element in the array that satisfies the provided testing function.
// Otherwise undefined is returned.

var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});

console.log(found);
// expected output: 12

// *** E.g 1 *** with for loop

var users = [{ name: "Jill" }, { name: "Alex" }, { name: "Bill" }];

var user;

for (var i = 0; i < user.length; i++) {
  if (users[i].name === "Alex") {
    user = users[i];
    break;
  }
}

user;

//output {'name': Alex'} {'name: Alex}

// *** E.g 1 *** refactored to find helper

var users = [{ name: "Jill" }, { name: "Alex" }, { name: "Bill" }];

users.find(function(user) {
  return user.name === "Alex";
});

// output {'name': 'Alex'}

// *** E.g 2 ***

function Car(model) {
  this.model = model;
}

var cars = [new Car("BMW"), new Car("Mercedes"), new Car("Lamborghini")];

cars.find(function(car) {
  return car.model === "Lamborghini";
});

// output {'model':'Lamborghini'}

// *** E.g 3 ***

var posts = [{ id: 1, title: "New Post" }, { id: 2, title: "Old Post" }];

var comment = { postId: 1, content: "Gread Post" };

function postForComment(posts, comment) {
  return posts.find(function(post) {
    return (post.id = comment.postId);
  });
}

postForComment(posts, comment);

// So the find helper - very flexible
//  whenever you have a single record or
//  you're trying to find it inside of a larger collection
//  and you want just one singular element out of there
//  I really urge you to look towards the find helper.
