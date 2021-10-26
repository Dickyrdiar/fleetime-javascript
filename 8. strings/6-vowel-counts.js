function vowel(word) {
  let count = 0;

  for (w of word) {
    if (w == 'a' || w == 'e' || w == 'i' || w == 'u' || w == 'o') {
      count++;
    }
  }
  return count;
}

console.log(vowel('Novian'));
