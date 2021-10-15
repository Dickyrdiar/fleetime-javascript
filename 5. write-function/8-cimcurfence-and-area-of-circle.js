function cimcurference(radius) {
  let circum = 2 * Math.PI * radius;
  return circum;
}

function area(radius) {
  let area = Math.PI * radius ** 2;
  return area;
}

console.log(cimcurference(2));
console.log(area(4));
