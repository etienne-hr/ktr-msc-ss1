class Movable {
  constructor(name, RPGClass) {
    this.name = name;
    this.RPGClass = RPGClass;
    this.movesMages = "furtively";
    this.movesWarrior = "like a bad boy";
  }

  moveRight() {
    if (this.RPGClass === "Mage") {
      return this.setMovesRight(this.RPGClass);
    } else if (this.RPGClass === "Warrior") {
      return this.setMovesRight(this.RPGClass);
    }
  }

  moveLeft() {
    if (this.RPGClass === "Mage") {
      return this.setMovesLeft(this.RPGClass);
    } else if (this.RPGClass === "Warrior") {
      return this.setMovesLeft(this.RPGClass);
    }
  }

  moveBack() {
    if (this.RPGClass === "Mage") {
      return this.setMovesBack(this.RPGClass);
    } else if (this.RPGClass === "Warrior") {
      return this.setMovesBack(this.RPGClass);
    }
  }

  moveForward() {
    if (this.RPGClass === "Mage") {
      return this.setMovesForward(this.RPGClass);
    } else if (this.RPGClass === "Warrior") {
      return this.setMovesForward(this.RPGClass);
    }
  }

  setMovesRight(rpg) {
    if (rpg) {
      if (rpg === "Mage") {
        console.log(`${this.name}: moves right ${this.movesMages}`);
      } else if (rpg === "Warrior") {
        console.log(`${this.name}: moves right ${this.movesWarrior}`);
      }
    } else {
      console.log(`${this.name}: moves right`);
    }
  }

  setMovesLeft(rpg) {
    if (rpg) {
      if (rpg === "Mage") {
        console.log(`${this.name}: moves left ${this.movesMages}`);
      } else if (rpg === "Warrior") {
        console.log(`${this.name}: moves left ${this.movesWarrior}`);
      }
    } else {
      console.log(`${this.name}: moves left`);
    }
  }

  setMovesBack(rpg) {
    if (rpg) {
      if (rpg === "Mage") {
        console.log(`${this.name}: moves back ${this.movesMages}`);
      } else if (rpg === "Warrior") {
        console.log(`${this.name}: moves back ${this.movesWarrior}`);
      }
    } else {
      console.log(`${this.name}: moves back`);
    }
  }

  setMovesForward(rpg) {
    if (rpg) {
      if (rpg === "Mage") {
        console.log(`${this.name}: moves forward ${this.movesMages}`);
      } else if (rpg === "Warrior") {
        console.log(`${this.name}: moves forward ${this.movesWarrior}`);
      }
    } else {
      console.log(`${this.name}: moves forward`);
    }
  }
}

module.exports = Movable;
