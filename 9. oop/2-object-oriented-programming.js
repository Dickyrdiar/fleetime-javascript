class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.xp = 0;
  }

  //Attack a target
  attack(target) {
    if (this.health > 0) {
      const damage = this.strength;
      console.log(`${this.name} attacks ${target.name} and causes ${damage} damage points`);

      target.health -= damage;

      if (target.health > 0) {
        console.log(`${target.name} has ${target.health} health points left`);
      } else {
        target.health = 0;
        const bonusXP = 10;
        console.log(`${this.name} eliminated ${target.name} and wins ${bonusXP} experience points`);
        this.xp += bonusXP;
      }
    } else {
      console.log(`${this.name} cant attack `);
    }
  }

  //Return to character description

  describe() {
    return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} as XP points `;
  }
}

const aurora = new Character('Aurora', 150, 25);
const glacius = new Character('Glacius', 200, 30);

console.log('Welcome to adventures! Here are our heroes :');

console.log(aurora.describe());
console.log(glacius.describe());

const monster = new Character('Spike', 40, 20);
console.log('A wild monster appeared: its named ' + monster.name);

monster.attack(aurora);
monster.attack(glacius);
glacius.attack(monster);
aurora.attack(monster);

console.log(aurora.describe());
console.log(glacius.describe());
