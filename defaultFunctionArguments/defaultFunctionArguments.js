function makeAjaxRequest(url, method) {
  if (!method) {
    method = "GET";
  }
  // logic to make the request
}

makeAjaxRequest("google.com");
makeAjaxRequest("google.com", "POST");

// with default function arguments
function makeAjaxRequest(url, method = "GET") {
  return method;
  // logic to make the request
}

makeAjaxRequest("google.com");
makeAjaxRequest("google.com", "POST");

//GET
//POST

//use case of Defaulting Arguments
function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 9999999;
}

function createAdminUser(user = new User(generateId())) {
  user.admin = true;

  return user;
}

const user = new User(generateId());
createAdminUser(user);
//{"id":135375.30592300143,"admin":true}
