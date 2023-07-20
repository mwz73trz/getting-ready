function rentalCarCost(d) {
  return d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0);
}
console.log(rentalCarCost(1)); // 40
console.log(rentalCarCost(2)); // 80
console.log(rentalCarCost(3)); // 100
console.log(rentalCarCost(4)); // 140
console.log(rentalCarCost(7)); // 230
console.log(rentalCarCost(8)); // 270
console.log(rentalCarCost(6)); // 220
