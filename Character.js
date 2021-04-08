class Character {
  constructor(name, RPGClass) {
    this.name = name;
    this.RPGClass = RPGClass;
    this.life = 50;
    this.agility = 2;
    this.strength = 2;
    this.wit = 2;
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

// const character = new Character("Jean", "Mage");
