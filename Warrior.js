const Character = require("./Character");
const Weapon = require("./WeaponException");

class Warrior extends Character {
  constructor(name, RPGClass, weapon) {
    super(name, RPGClass);
    this.life = 100;
    this.agility = 8;
    this.strength = 10;
    this.wit = 3;
    this.weapon = weapon;
    this.weaponException = new Weapon(this.name, this.RPGClass, this.weapon);

    console.log(`${this.name}: May the gods be with me.`);

    if (this.weapon) {
      this.getAttack;
    }
  }
}

const warrior = new Warrior("Luc", "Warrior", "Sword");

warrior.moves;
warrior.characterMovesBack();
warrior.tryToAttack("Wand");
warrior.tryToAttack("Sword");
