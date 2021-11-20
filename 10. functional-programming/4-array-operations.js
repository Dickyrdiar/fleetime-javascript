// Map method

/**
 * The map() method takes an array as a parameter and creates a new array with the results of calling a provided function on every element in this array. A typical use of map() is to replace a loop for array traversal. Let’s see map() in action.
 */

const numbers = [1, 5, 10, 15];

// The associates function multiply each array number by 2

const doubles = numbers.map(x => x * 2);

console.log(numbers);
console.log(doubles);

// Get movie titles
const titles = movies => {
  /* Previous code
  const titles = [];
  for (const movie of movies) {
    titles.push(movie.title);
  }
  return titles;
  */

  // Return a new array containing only movie titles
  return movies.map(movie => movie.title);
};

// Filter method

/**
 * The filter() method offers a way to test every element of an array against a provided function. Only elements that pass this test are added to the returned array.
 */

const bigOnes = numbers.filter(x => x >= 10);

console.log(bigOnes);

// Get movies by Christopher Nolan
const nolanMovies = movies => {
  /* Previous code
  const nolanMovies = [];
  for (const movie of movies) {
    if (movie.director === "Christopher Nolan") {
      nolanMovies.push(movie);
    }
  }
  return nolanMovies;
  */

  // Return a new array containing only movies by Christopher Nolan
  return movies.filter(movie => movie.director === 'Christopher Nolan');
};

/**
 * The map() and filter() method can be used together to achieve powerful effects. Look at this new version of the bestTitles() function.
 */

// Get titles of movies with an IMDB rating greater or equal to 7.5
const bestTitles = movies => {
  /* Previous code
  const bestTitles = [];
  for (const movie of movies) {
    if (movie.imdbRating >= 7.5) {
      bestTitles.push(movie.title);
    }
  }
  return bestTitles;
  */

  // Filter movies by IMDB rating, then creates a movie titles array
  return movies.filter(movie => movie.imdbRating >= 7.5).map(movie => movie.title);
};

// Reduce method

/**
 * The reduce() method applies a provided function to each array element in order to reduce it to one value. This method is typically used to perform calculations on an array.
 */

const sum = numbers.reduce((acc, value) => acc + value, 0);

console.log(sum);
