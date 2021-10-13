const prompt = require('prompt-sync')();

const number = Number(prompt('Enter number : '));

if (number >= 0) {
  console.log(`${number} is positive or zero`);
} else {
  console.log('Invalid');
}
