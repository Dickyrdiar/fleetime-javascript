const prompt = require('prompt-sync')();

const firstNumber = Number(prompt('Enter first number : '));
const secondNumber = Number(prompt('Enter second number : '));

if (firstNumber > secondNumber) {
  console.log(`${firstNumber} is greater than ${secondNumber}`);
} else if (firstNumber < secondNumber) {
  console.log(`${firstNumber} is lower than ${secondNumber}`);
} else if (firstNumber === secondNumber) {
  console.log(`${firstNumber} is same as ${secondNumber}`);
} else {
  console.log('Invalid');
}
