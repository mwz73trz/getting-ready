function calculateScore(points) {
  let count = points[0];
  count += points[1];
  count += points[2];
  count += points[3];
  count += points[4];
  return count;
}

console.log(calculateScore([15, 10, 15, 20, 20])); // 80
console.log(calculateScore([20, 20, 20, 20, 20])); // 100
