function maxElement(values) {
  let max = values[0];
  for (value of values) {
    if (value > max) max = value;
  }
  return max;
}

console.log(maxElement([3, 11, 7, 2, 9, 10]));
