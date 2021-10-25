// Creating an Object

const pen = {
  type: 'ballpoint',
  color: 'blue',
  brand: 'faster',
};

// Accessing Object

console.log(pen.type);
console.log(pen.color);
console.log(pen.brand);

console.log(`I write with a ${pen.color} ${pen.brand} ${pen.type}`);

// Modifying an Object

pen.color = 'red';

console.log(pen.color);

// Dynamically add new properties

pen.price = 1.5;

console.log(`This pen i bought at ${pen.price}`);
