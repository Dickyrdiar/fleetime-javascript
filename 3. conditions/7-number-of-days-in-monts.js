const prompt = require('prompt-sync')();

const month = Number(prompt('Enter month number : '));

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log('Number of days : 31 ');
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log('Number of days : 30');
    break;
  case 2:
    console.log('Number of days : 28');
    break;
  default:
    console.log('Invalid month');
}
