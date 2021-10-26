function palindrome(word) {
  let backwardWord = '';
  for (letter of word) {
    backwardWord = letter + backwardWord;
  }

  if (word.toLowerCase() === backwardWord.toLowerCase()) {
    return true;
  } else return false;
}

console.log(palindrome('radar'));
