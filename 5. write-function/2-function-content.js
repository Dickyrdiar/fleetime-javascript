// Return Value

function sayHello() {
  return 'Hello';
}

console.log('Start of program');
const message = sayHello(); // Store the function return value in a variable
console.log(message);
console.log('End of program');

// Local Variables

function sayHelloo() {
  const message = 'Hello!';
  return message;
}

console.log(sayHelloo());

// Parameter Passing

function sayHellooo(name) {
  const message = `Hello, ${name}`;
  return message;
}

console.log(sayHellooo('Novian'));
