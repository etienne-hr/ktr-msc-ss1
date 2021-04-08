const Character = require("./Character");

class Warrior extends Character {
  constructor(name, RPGClass, weapon) {
    super(name, RPGClass);
    this.life = 100;
    this.agility = 8;
    this.strength = 10;
    this.wit = 3;
    this.weapon = weapon;

    console.log("May the gods be with me.");

    if (this.weapon) {
      this.getAttack;
      this.setAttackWarrior();
    }
  }

  setAttackWarrior() {
    console.log(this.name + ": " + `I'll crush you with my ${this.weapon} !`);
  }
}

const warrior = new Warrior("Luc", "Warrior", "Sword");
