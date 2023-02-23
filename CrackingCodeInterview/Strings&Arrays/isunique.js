function unique(str) {
  characters = {};
  for (let i = 0; i < str.length; i++) {
    characters[str[i]];
    if (characters[str[i]]) {
      characters[str[i]]++;
      return ("It's not unique")
    } else {
      characters[str[i]] = 1;
    }
    characters[str[i]];
  }
  return ("It's unique:)")
}

console.log(unique("bca"))
