function nbYear(p0, percent, aug, p) {
  // p0 = population at beginning of year
  // percent = growth
  // aug = new inhabitants
  // p = population to meet
  let years = 0;
  while (p0 < p) {
    years++;
    p0 = p0 + Math.floor(p0 * (percent / 100)) + aug;
  }
  return years;
}

console.log(nbYear(1500, 5, 100, 5000)); // 15
console.log(nbYear(1500000, 2.5, 10000, 2000000)); // 10
console.log(nbYear(1500000, 0.25, 1000, 2000000)); // 94
console.log(nbYear(1000, 2, 50, 1200)); // 3
