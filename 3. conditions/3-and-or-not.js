// AND

let number1 = 100;

if (number1 >= 0 && number1 <= 100) {
  console.log(`${number1} is between 0 - 100, both included`);
}

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// OR

const number2 = 1;

if (number2 < 0 || number2 > 100) {
  console.log(`${number2} is not between 0 - 100`);
}

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// NOT
const number3 = 100;

if (!(number3 > 100)) {
  console.log(`${number3} is less than or equal to 100`);
}

console.log(!true); // false
console.log(!false); // true
