const movieList = [
  {
    title: 'Batman',
    year: 1989,
    director: 'Tim Burton',
    imdbRating: 7.6,
  },
  {
    title: 'Batman Returns',
    year: 1992,
    director: 'Tim Burton',
    imdbRating: 7.0,
  },
  {
    title: 'Batman Forever',
    year: 1995,
    director: 'Joel Schumacher',
    imdbRating: 5.4,
  },
  {
    title: 'Batman & Robin',
    year: 1997,
    director: 'Joel Schumacher',
    imdbRating: 3.7,
  },
  {
    title: 'Batman Begins',
    year: 2005,
    director: 'Christopher Nolan',
    imdbRating: 8.3,
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    director: 'Christopher Nolan',
    imdbRating: 9.0,
  },
  {
    title: 'The Dark Knight Rises',
    year: 2012,
    director: 'Christopher Nolan',
    imdbRating: 8.5,
  },
];

// Get movie titles
const titles = [];
for (movie of movieList) {
  titles.push(movie.title);
}

console.log(titles);

// Count movie by Christopher Nolan

const nolanMovieList = [];
for (const movie of movieList) {
  if (movie.director === 'Christopher Nolan') {
    nolanMovieList.push(movie);
  }
}

console.log(nolanMovieList.length);

// Get a titles of movies with an IMDB rating greater than or equal to 7.5

const bestMoviesList = [];
for (const movie of movieList) {
  if (movie.imdbRating >= 7.5) {
    bestMoviesList.push(movie.title);
  }
}

console.log(bestMoviesList);

// Compute average movie rating of Christopher Nolan's movies

let ratingSum = 0;
let averageRating = 0;

for (const movie of nolanMovieList) {
  ratingSum += movie.imdbRating;
}

averageRating = ratingSum / nolanMovieList.length;

console.log(averageRating);
