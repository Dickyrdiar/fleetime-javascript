var aurora = {
  name: 'Aurora',
  health: 250,
  strength: 25,
  xp: 0,
  describe() {
    return `${this.name} has ${this.health} health point and ${this.strength} as strenght and ${this.xp} xp`;
  },
};

console.log(aurora.describe());
