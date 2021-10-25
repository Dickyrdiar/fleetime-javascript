function sumArray(values) {
  let sum = 0;
  for (value of values) {
    sum += value;
  }
  return sum;
}

console.log(sumArray([3, 11, 7, 2, 9, 10]));
