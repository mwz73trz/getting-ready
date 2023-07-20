const bouncingBall = function (h, bounce, window) {
  let total = 1;
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }
  h *= bounce;
  while (h > window) {
    total += 2;
    h *= bounce;
  }
  return total;
};

console.log(bouncingBall(3.0, 0.66, 1.5)); // 3
console.log(bouncingBall(30.0, 0.66, 1.5)); // 15
console.log(bouncingBall(3.0, 1.0, 1.5)); // -1
console.log(bouncingBall(4, 0.25, 1)); // 1
