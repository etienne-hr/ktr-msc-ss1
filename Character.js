class Character {
  constructor(name, RPGClass) {
    this.name = name;
    this.RPGClass = RPGClass;
    this.life = 50;
    this.agility = 2;
    this.strength = 2;
    this.wit = 2;
    this.movesMages = "furtively";
    this.movesWarrior = "like a bad boy";
  }

  get getAttack() {
    return this.setAttack();
  }

  get getMoveRight() {
    return console.log(this.name + ": " + "moves right");
  }

  get getMoveLeft() {
    return console.log(this.name + ": " + "moves left");
  }

  get getMoveBack() {
    return console.log(this.name + ": " + "moves back");
  }

  get getMoveForward() {
    return console.log(this.name + ": " + "moves forward");
  }

  get getName() {
    return this.setName();
  }

  get getRPGClass() {
    return this.setRPGClass();
  }

  get getLife() {
    return this.setLife();
  }

  get getAgility() {
    return this.setAgility();
  }

  get getStrength() {
    return this.setStrength();
  }

  get getWit() {
    return this.setWit();
  }

  get moves() {
    this.setMovesRight();
    this.setMovesLeft();
    this.setMovesBack();
    this.setMovesForward();
  }

  moveRight() {
    if (this.RPGClass === "Mage") {
      return this.setMovesRight(this.getRPGClass);
    } else if (this.RPGClass === "Warrior") {
      return this.setMovesRight(this.getRPGClass);
    }
  }

  moveLeft() {
    if (this.RPGClass === "Mage") {
      return this.setMovesLeft(this.getRPGClass);
    } else if (this.RPGClass === "Warrior") {
      return this.setMovesLeft(this.getRPGClass);
    }
  }

  moveBack() {
    if (this.RPGClass === "Mage") {
      return this.setMovesBack(this.getRPGClass);
    } else if (this.RPGClass === "Warrior") {
      return this.setMovesBack(this.getRPGClass);
    }
  }

  moveForward() {
    if (this.RPGClass === "Mage") {
      return this.setMovesForward(this.getRPGClass);
    } else if (this.RPGClass === "Warrior") {
      return this.setMovesForward(this.getRPGClass);
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

  setAttack() {
    console.log(this.name + ": " + "Rrrrrr");
  }

  setName() {
    return this.name;
  }

  setRPGClass() {
    return this.RPGClass;
  }

  setLife() {
    return this.life;
  }

  setAgility() {
    return this.agility;
  }

  setStrength() {
    return this.strength;
  }

  setWit() {
    return this.wit;
  }
}

module.exports = Character;
