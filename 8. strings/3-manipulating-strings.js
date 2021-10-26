// Turning string into array

const name = 'Sarah';
const nameArray = Array.from(name);

nameArray.forEach(letter => {
  console.log(letter);
});

// Breaking string into parts

const monthList = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';
const month = monthList.split(',');

console.log(month[0]);
