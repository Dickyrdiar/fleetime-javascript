const prompt = require('prompt-sync')();

let number = 1000;
while (number < 50 || number > 100) {
  number = Number(prompt('Enter a number between 50 - 100:'));
}
console.log('Success');
