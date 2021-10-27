const aurora = {
  name: 'Aurora',
  health: 250,
  strength: 25,

  describe() {
    return `${this.name} has ${this.health} health points and ${this.strength} as strength`;
  },
};

console.log(aurora.describe());

// console.log(`${aurora.name} has ${aurora.health} health point and ${aurora.strength} as strength`);

// // Aurora harmed by an arrow

// aurora.health -= 20;

// // Aurora equips a strength necklace

// aurora.strength += 10;

// console.log(`${aurora.name} has ${aurora.health} health point and ${aurora.strength} as strength`);

// Adding method to an object

// Return the character description

// function describe(character) {
//   return `${character.name} has ${character.health} health points and ${character.strength} as strength`;
// }

// console.log(describe(aurora));

// This Keyword
