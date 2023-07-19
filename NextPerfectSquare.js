function findNextSquare(sq) {
  let x = Math.sqrt(sq);
  let checker = x % 1;
  if (checker === 0) {
    let result = (x + 1) ** 2;
    return result;
  } else {
    return -1;
  }
}

console.log(findNextSquare(121)); // 144
console.log(findNextSquare(625)); // 676
console.log(findNextSquare(319225)); // 320356
console.log(findNextSquare(1)); // 4
console.log(findNextSquare(3));
