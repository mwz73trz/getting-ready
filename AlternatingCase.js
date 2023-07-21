const alternatingCase = (str) => {
  let temp = str.split("");
  let cased = [];

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === temp[i].toUpperCase()) {
      cased.push(temp[i].toLowerCase());
    } else {
      cased.push(temp[i].toUpperCase());
    }
  }
  return cased.join("");
};

console.log(alternatingCase("heLLo WorlD")); // HEllO wORLd
console.log(alternatingCase("12345")); // 12345
