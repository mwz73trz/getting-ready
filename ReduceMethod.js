const myReducer = function (arr) {
  let initalValue = 0;
  const sumWithInitial = arr.reduce(
    (accumalator, currentValue) => accumalator + currentValue,
    initalValue
  );
  return sumWithInitial;
};

console.log(myReducer([1, 2, 3, 4])); // 10

function errorReducer(accum, currValue, index) {
  const returns = accum + currValue;
  console.log(
    `accumaltor: ${accum}, currentValue: ${currValue}, index: ${index}, returns: ${returns}`
  );
  return returns;
}

[15, 16, 17, 18, 19].reduce(errorReducer);
