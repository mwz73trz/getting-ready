function betterThanAverage(classPoints, yourPoints) {
  let classTotal = 0;
  let overAllTotal = 0;
  for (let i = 0; i < classPoints.length; i++) {
    classTotal += classPoints[i];
  }
  overAllTotal = classTotal + yourPoints;
  let overAllAverage = overAllTotal / (classPoints.length + 1);
  if (yourPoints > overAllAverage) {
    return true;
  } else {
    return false;
  }
}

console.log(betterThanAverage([2, 3], 5));
