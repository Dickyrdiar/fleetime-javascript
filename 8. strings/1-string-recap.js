// A string value represents text
// In JavaScript, a string is defined by placing text within single quotes ('I am a string') or double quotes ("I am a string")
// You may use special characters within a string by prefacing them with \ (“backslash”) followed by another character. For example, use \n to add a line break
// The + operator concatenates (combines or adds) two or more strings

// Obtaining string length
console.log('ABCD'.length);
const str = 'I am a string';
const len = str.length;
console.log(len);

// Converting string case
const originalWords = 'Novian Andika';

const lowerCaseWords = originalWords.toLowerCase();
console.log(lowerCaseWords);

const upperCaseWords = originalWords.toUpperCase();
console.log(upperCaseWords);

// Comparing two strings

const word = 'Koala';

console.log(word === 'Koala');
console.log(word === 'Crocodile');
