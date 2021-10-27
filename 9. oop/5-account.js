class Account {
  constructor(name, balance) {
    this.name = name;
    this.balance = 0;
  }

  credit(value) {
    this.balance += value;
  }

  describe() {
    return 'Name : ' + this.name + '\nBalance :' + this.balance;
  }
}

const novian = new Account('Novian', 100000);

console.log(novian.describe());
