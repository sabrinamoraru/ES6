// Exercise 1 - Game Classes
// create a class called 'Monster'
// initialize the Monster's health to 100
// the constructor will be called with an 'options' object that has a 'name' property
// assign the 'name' to the Monster

class Monster {
  constructor({ name }) {
    this.health = 100;
    this.name = name;
  }
}

const monster = new Monster({ name: "Bob" });
monster;

// Exercise 2 - Subclassing Monsters
// create a subclass of the Monster called Snake
// the Snake should have a 'bite' method
// the only argument to this method is another instance of a Snake
// the instance of Snake that is passed in should have their health deducated by 10

class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster {
  constructor(options) {
    super(options);
  }
  bite(another) {
    return (another.health -= 10);
  }
}

// or
class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster {
  constructor(options) {
    super(options);
  }
  bite(snake) {
    snake.decHealth(10);
    return `I bite ${snake.getName()}, his health is now ${snake.getHealth()}.`;
  }
  getHealth() {
    return this.health;
  }
  getName() {
    return this.name;
  }
  decHealth(qty) {
    this.health = this.health - qty;
  }
}

const curly = new Snake({ name: "Curly" });
const mo = new Snake({ name: "Mo" });
mo.getHealth();
mo.bite(curly);
