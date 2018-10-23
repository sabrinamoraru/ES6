function getMessage() {
  const year = new Date().getFullYear();

  return "The year is " + year;
}

getMessage();

// The year is 2018

// refactored

function getMessage() {
  const year = new Date().getFullYear();

  return `The year is ${year}`;
}

getMessage();

// The year is 2018
