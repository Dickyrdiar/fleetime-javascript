const prompt = require('prompt-sync')();

let number = Number(prompt('Enter number : '));

for (let i = number; i < number + 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}
