var musketeers = ['Athos', 'Porthos', 'Aramis'];
musketeers.push("D'Artagnan");
var index = musketeers.indexOf('Aramis');
if (index > -1) {
  musketeers.splice(index, 1);
}
