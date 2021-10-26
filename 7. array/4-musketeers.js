let musketeers = ['Athos', 'Porthos', 'Aramis'];

musketeers.push("D'Artagnan");

let index = musketeers.indexOf('Aramis');

if (index > -1) {
  musketeers.splice(index, 1);
}
