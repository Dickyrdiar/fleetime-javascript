let words = {
  list: [],

  addWord(word) {
    if (!word.endsWith('ing')) {
      this.list.push(word);
    }
  },
};
