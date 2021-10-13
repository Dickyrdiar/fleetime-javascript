// Usual else if statement

// const prompt = require('prompt-sync')();

// const weather = prompt("What's weather like ?");

// if (weather === 'sunny') {
//   console.log('T-shirt time');
// } else if (weather === 'windy') {
//   console.log('Windbreaker life');
// } else if (weather === 'rainy') {
//   console.log('Bring that umbrella');
// } else if (weather === 'snowy') {
//   console.log('Just stay inside');
// } else {
//   console.log('Invalid weather');
// }

// Switch statement more cleaner

const prompt = require('prompt-sync')();

const weather = prompt("What's weather like ? : ");

switch (weather) {
  case 'sunny':
    console.log('T-shirt time');
    break;
  case 'windy':
    console.log('Windbreaker');
    break;
  case 'rainy':
    console.log('Bring that umbrella');
    break;
  case 'snowy':
    console.log('Just stay inside');
    break;
  default:
    console.log('Invalid weather');
}
