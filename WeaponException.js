class Weapon {
  constructor(name, RPGClass, weapon) {
    this.name = name;
    this.RPGClass = RPGClass;
    this.weapon = weapon;
  }

  setAttackMage() {
    console.log(this.name + ": " + `Feel the power of my ${this.weapon} !`);
  }

  setAttackWarrior() {
    console.log(this.name + ": " + `I'll crush you with my ${this.weapon} !`);
  }

  attackException(weapon) {
    if (weapon) {
      if (weapon === this.weapon && this.RPGClass === "Mage") {
        this.setAttackMage();
      } else if (weapon != this.weapon && this.RPGClass === "Mage") {
        console.log(
          `${this.name}: I don't need this stupid ${weapon}! Don't misjudge my powers !`
        );
      } else if (weapon === this.weapon && this.RPGClass === "Warrior") {
        this.setAttackWarrior();
      } else if (weapon != this.weapon && this.RPGClass === "Warrior") {
        console.log(
          `${this.name}: A ${weapon}?? What should I do with this ?!`
        );
      }
    } else {
      console.log(`${this.name}: I refuse to fight with my bare hands`);
    }
  }
}

module.exports = Weapon;
