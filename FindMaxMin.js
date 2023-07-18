var min = function (list) {
  let min = list[0];
  for (let i = 0; i < list.length; i++) {
    if (list[i] < min) {
      min = list[i];
    }
  }
  return min;
};

let max = function (list) {
  let max = list[0];
  for (let i = 0; i < list.length; i++) {
    if (list[i] > max) {
      max = list[i];
    }
  }
  return max;
};

console.log(min([1, -2, 300, 4, 5]));
console.log(max([1, -2, 300, 4, 5]));
