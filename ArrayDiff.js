function arrayDiff(array1, array2) {
  if (array1.length === 0) {
    return [];
  }
  if (array2.length === 0) {
    return array1;
  }

  let result = [];
  array1.forEach(function included(element) {
    if (!array2.includes(element)) {
      result.push(element);
    }
  });
  return result;
}

console.log(arrayDiff([1, 2], [1])); // [2]
console.log(arrayDiff([1, 2, 2, 2, 3], [2])); // [1, 3]
console.log(arrayDiff([], [1, 2])); // []
console.log(arrayDiff([1, 2], [])); // [1, 2]
console.log(arrayDiff([], [])); // []
