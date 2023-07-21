const count = (string) => {
  let results = {};
  if (string.length === 0) return {};

  for (let i = 0; i < string.length; i++) {
    if (results.hasOwnProperty(string[i])) {
      results[string[i]] += 1;
    } else {
      results[string[i]] = 1;
    }
  }
  return results;
};

console.log(count("")); // {}
console.log(count("hello")); // {'e': 1, 'h': 1, 'l': 2, 'o': 1}
