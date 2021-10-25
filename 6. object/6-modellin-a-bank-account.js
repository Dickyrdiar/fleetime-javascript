let account = {
  name: 'Alex',
  balance: 0,

  credit(value) {
    this.balance += value;
    return this.balance;
  },

  describe() {
    return `Your name is ${this.name} and your balance is ${this.balance}`;
  },
};
