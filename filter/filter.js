// The filter() method creates a new array with all elements that pass the test
// implemented by the provided function.

var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

var products = [
  { name: "cucumber", type: "vegetable" },
  { name: "banana", type: "fruit" },
  { name: "celery", type: "vegetable" },
  { name: "orange", type: "fruit" }
];
var filteredProducts = [];

for (var i = 0; i < products.length; i++) {
  if (products[i].type === "fruit") {
    filteredProducts.push(products[i]);
  }
}

filteredProducts;

// 2
// [{"name":"banana","type":"fruit"},{"name":"orange","type":"fruit"}]

// refactoring;

products.filter(function(product) {
  return product.type === "vegetable";
});

// output
// 2
// [{"name":"banana","type":"fruit"},{"name":"orange","type":"fruit"}]
// [{"name":"cucumber","type":"vegetable"},{"name":"celery","type":"vegetable"}]

var products = [
  { name: "cucumber", type: "vegetable", quantity: 0, price: 1 },
  { name: "banana", type: "fruit", quantity: 10, price: 15 },
  { name: "celery", type: "vegetable", quantity: 30, price: 9 },
  { name: "orange", type: "fruit", quantity: 3, price: 5 }
];

// Type is 'vegetable', quantity is > 0, price is < 10

products.filter(function(product) {
  return (
    product.type === "vegetable" && product.quantity > 0 && product.price < 10
  );
});

// output   [{"name":"celery","type":"vegetable","quantity":30,"price":9}]

var post = { id: 4, title: "New Post" };
var comments = [
  { postId: 4, content: "awesome post" },
  { postId: 3, content: "it was ok" },
  { postId: 4, content: "neat" }
];

function commentsForPost(post, comments) {
  return comments.filter(function(comment) {
    return comment.postId === post.id;
  });
}

commentsForPost(post, comments);

// output   [{"postId":4,"content":"awesome post"},{"postId":4,"content":"neat"}]
