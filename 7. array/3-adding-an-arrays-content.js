const movies = ['The wolf of wall street', 'Zootopia', 'Babysitting'];

// Add element at end of an arrays
movies.push('Ghostbusters');

// Add element at begining of an arrays
movies.unshift('Pacific Rim');

// Removing element from an array using pop
// movies.pop(); // Remove the last array elements

// Removing element from an array using splice
movies.splice(2, 3);

console.log(movies.length);
console.log(movies[0]);
