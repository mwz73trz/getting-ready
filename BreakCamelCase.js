const solution = (str) => {
  let splitStr = str.split("");
  let newStr = "";

  splitStr.forEach((e) => {
    if (e === e.toUpperCase()) newStr += " " + e;
    else newStr += e;
  });
  return newStr;
};

console.log(solution("camelCasing")); // camel Casing
console.log(solution("camelCasingTest")); // camel Casing Test
