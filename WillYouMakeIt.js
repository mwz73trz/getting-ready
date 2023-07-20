function zeroFuel(distanceToPump, mpg, fuelLeft) {
  let miles = mpg * fuelLeft;
  if (miles >= distanceToPump) {
    return true;
  } else {
    return false;
  }
}

console.log(zeroFuel(50, 25, 2)); // true
console.log(zeroFuel(100, 50, 1)); // false
