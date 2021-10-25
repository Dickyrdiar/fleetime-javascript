const aurora = {
  name: 'Aurora',
  health: 250,
  streght: 25,

  describe() {
    return `${this.name} has ${this.health} health points and ${this.streght} as strenght`;
  },
};

console.log(aurora.describe());

// console.log(`${aurora.name} has ${aurora.health} health point and ${aurora.streght} as streght`);

// // Aurora harmed by an arrow

// aurora.health -= 20;

// // Aurora equips a streght necklace

// aurora.streght += 10;

// console.log(`${aurora.name} has ${aurora.health} health point and ${aurora.streght} as streght`);

// Adding method to an object

// Return the character description

// function describe(character) {
//   return `${character.name} has ${character.health} health points and ${character.streght} as strength`;
// }

// console.log(describe(aurora));

// This Keyword
