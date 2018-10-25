// Ex 1
// refactor the following code to use default function arguments
/*
  function sum(a, b) {
    if (a === undefined) {
      a = 0;
    }

    if (b === undefined) {
      b = 0;
    }

    return a + b;
  }
  */

function sum(a = 0, b = 0) {
  return a + b;
}

//or

const sum = (a = 0, b = 0) => a + b;

// Ex 2
// refactor the following code to use default function arguments
/*
  function addOffset(style) {
    if (!style) {
      style = {}; 
    }
    
    style.offset = '10px';
    
    return style;
  }
  */
const addOffset = (style = {}) => {
  style.offset = "10px";

  return style;
};

// or
const addOffset = (style = { offset: "10px" }) => style;
