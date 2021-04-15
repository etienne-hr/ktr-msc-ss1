const Movable = require("./Movable");

class Character {
  constructor(name, RPGClass) {
    this.name = name;
    this.RPGClass = RPGClass;
    this.life = 50;
    this.agility = 2;
    this.strength = 2;
    this.wit = 2;

    this.movable = new Movable(this.name, this.RPGClass);
  }

  characterMovesBack() {
    this.movable.moveBack();
  }

  characterMovesForward() {
    this.movable.moveForward();
  }

  characterMovesLeft() {
    this.movable.moveLeft();
  }

  characterMovesRight() {
    this.movable.moveRight();
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

  unsheathe() {
    return console.log(`${this.name}: unsheathes his weapon.`);
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
