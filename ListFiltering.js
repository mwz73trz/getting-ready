function filter_list(l) {
  let result = [];
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === "number") {
      result.push(l[i]);
    }
  }
  return result;
}

console.log(filter_list([1])); // [1]
console.log(filter_list([1, "michael"])); // [1]
console.log(filter_list([1, 2, 3])); // [1, 2, 3]
