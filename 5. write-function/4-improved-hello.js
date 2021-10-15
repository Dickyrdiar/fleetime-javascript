const prompt = require('prompt-sync')();

function sayHello(firstname, lastname) {
  return `Hello, ${firstname} ${lastname}`;
}

const firstname = prompt('Enter you first name :');
const lastname = prompt('Enter your last name :');

console.log(sayHello(firstname, lastname));
