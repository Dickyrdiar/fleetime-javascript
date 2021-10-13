const prompt = require('prompt-sync')();

const today = prompt('Enter day : ');

switch (today) {
  case 'monday':
    console.log(`Following day after ${today} is Tuesday`);
    break;
  case 'tuesday':
    console.log(`Following day after ${today} is Wednesday`);
    break;
  case 'wednesday':
    console.log(`Following day after ${today} is Thursday`);
    break;
  case 'thursday':
    console.log(`Following day after ${today} is Friday`);
    break;
  case 'friday':
    console.log(`Following day after ${today} is Saturday`);
    break;
  case 'saturday':
    console.log(`Following day after ${today} is Sunday`);
    break;
  case 'sunday':
    console.log(`Following day after ${today} is Monday`);
    break;
  default:
    console.log('Invalid day');
}
