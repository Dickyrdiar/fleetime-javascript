const prompt = require('prompt-sync')();

let input = '';
while (input !== 'yes' && input !== 'no') {
  input = prompt('Do you want to play yes or no ? : ');
}
console.log('Game Over');
