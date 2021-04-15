const Character = require("./Character");
const Weapon = require("./WeaponException");

class Mage extends Character {
  constructor(name, RPGClass, weapon) {
    super(name, RPGClass);
    this.life = 70;
    this.agility = 10;
    this.strength = 3;
    this.wit = 10;
    this.weapon = weapon;
    this.weaponException = new Weapon(this.name, this.RPGClass, this.weapon);

    console.log("My name will go down in history !");

    if (this.weapon) {
      this.getAttack;
    }
  }
}

const mage = new Mage("Jean", "Mage", "Wand");

// mage.moves;
// mage.characterMovesBack();
// mage.characterMovesLeft();
// mage.characterMovesRight();
// mage.characterMovesLeft();

// mage.tryToAttack("guil");
// mage.tryToAttack("Wand");
