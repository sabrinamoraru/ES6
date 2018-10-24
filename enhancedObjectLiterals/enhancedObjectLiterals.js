function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle: function(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  { title: "Harry Potter", price: 10 },
  { title: "Eloquent Javascript", price: 15 }
];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();
bookShop.priceForTitle("Harry Potter");

// 25
// 10

// enhanced object literals

function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  { title: "Harry Potter", price: 10 },
  { title: "Eloquent Javascript", price: 15 }
];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();
bookShop.priceForTitle("Harry Potter");

// 25
// 10

// more practical ex
// imagine we are going to use jQuery to post some data or make an HTTP request to some remote end point
function saveFile(url, data) {
  $.ajax({ method: "POST", url: url, data: data });
}

const url = "http://fileupload.com";
const data = { color: "red" };

saveFile(url, data);

// to this
function saveFile(url, data) {
  $.ajax({
    url,
    data,
    method: "POST"
  });
}

const url = "http://fileupload.com";
const data = { color: "red" };

saveFile(url, data);
