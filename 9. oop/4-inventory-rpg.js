class Character {
  constructor(name, health, strength, inventory) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.xp = 0; // XP is always zero for new characters
    this.inventory = [10, 1]; // 10 Gold, 1 Key
  }
  // Attack a target
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
        const goldWon = target.inventory[0];
        const keyWon = target.inventory[1];
        console.log(
          `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points also gained ${goldWon} Gold and ${keyWon} Keys`
        );
        this.xp += bonusXP;
        this.inventory[0] += goldWon;
        this.inventory[1] += keyWon;
      }
    } else {
      console.log(`${this.name} can't attack (they've been eliminated)`);
    }
  }
  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points and has ${this.inventory[0]} Gold and ${this.inventory[1]} keys`;
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
