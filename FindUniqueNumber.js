const findUniq = (arr) => {
  arr = arr.sort();
  if (arr[0] === arr[1]) {
    return arr[arr.length - 1];
  } else {
    return arr[0];
  }
};

console.log(findUniq([1, 0, 0])); // 1
console.log(findUniq([0, 1, 0])); // 1
console.log(findUniq([0, 0, 1])); // 1
console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
console.log(findUniq([1, 1, 2, 1, 1])); // 2
console.log(findUniq([3, 10, 3, 3, 3])); // 10
