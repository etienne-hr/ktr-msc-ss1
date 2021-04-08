const Character = require("./Character");

class Mage extends Character {
  constructor(name, RPGClass, weapon) {
    super(name, RPGClass);
    this.life = 70;
    this.agility = 10;
    this.strength = 3;
    this.wit = 10;
    this.weapon = weapon;

    console.log("My name will go down in history !");

    if (this.weapon) {
      this.getAttack;
      this.setAttackMage();
    }
  }

  setAttackMage() {
    console.log(this.name + ": " + `Feel the power of my ${this.weapon} !`);
  }
}

const mage = new Mage("Jean", "Mage", "Wand");

console.log(mage);
