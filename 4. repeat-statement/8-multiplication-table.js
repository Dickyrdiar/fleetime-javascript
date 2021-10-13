const prompt = require('prompt-sync')();

let number = 0;
while (number < 2 || number > 9) {
  number = Number(prompt('Please enter the number between 2 and 9 : '));
}

let i = 1;
while (i <= 10) {
  console.log(`${number} X ${i} = ${number * i}`);
  i++;
}
