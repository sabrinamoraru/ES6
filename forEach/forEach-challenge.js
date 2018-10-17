////// chalenge 1
// refactor the code below to instead use the forEach helper

// for loop
function handlePosts() {
  var posts = [
    { id: 23, title: "Daily JS News" },
    { id: 52, title: "Code Refactor City" },
    { id: 105, title: "The Brightest Ruby" }
  ];

  for (var i = 0; i < posts.length; i++) {
    savePost(posts[i]);
  }
}

// forEach - solved

function handlePosts() {
  var posts = [
    { id: 23, title: "Daily JS News" },
    { id: 52, title: "Code Refactor City" },
    { id: 105, title: "The Brightest Ruby" }
  ];

  posts.forEach(post => {
    savePost(post);
  });
}

///// challenge 2

// The array below contains an array of objects
// each of which is a representation for the forEach helper
// calculate the area of each image and store it in a new array called 'areas'
// the area of an image can be calculated as
// 'image.height * image.widht'

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

images.forEach(function(image) {
  areas.push(image.height * image.width);
});
