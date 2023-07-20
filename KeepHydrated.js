const hydrated = function (time) {
  let water = Math.floor(time * 0.5);
  return water;
};

console.log(hydrated(2)); // 1
console.log(hydrated(1.4)); // 0
console.log(hydrated(12.3)); // 6
console.log(hydrated(0.82)); // 0
console.log(hydrated(11.8)); // 5
console.log(hydrated(1787)); // 893
console.log(hydrated(0)); // 0
