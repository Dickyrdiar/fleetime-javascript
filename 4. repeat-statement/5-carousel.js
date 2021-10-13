const prompt = require('prompt-sync')();

// for (let i = 1; i <= 10; i++) {
//   console.log(`Turn number : ` + i);
// }

let number = Number(prompt('Enter number of turns : '));
let turn = 1;

while (turn <= number) {
  console.log(`Turn number : ${turn}`);
  turn++;
}
