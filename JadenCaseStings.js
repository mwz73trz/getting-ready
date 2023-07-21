const jadenCase = (str) => {
  let splitStr = str.split(" ");
  let newArr = [];
  for (let i = 0; i < splitStr.length; i++) {
    newArr.push(splitStr[i][0].toUpperCase() + splitStr[i].slice(1));
  }
  return newArr.join(" ");
};

console.log(jadenCase("where is the cat")); // Where Is The Cat
console.log(jadenCase("i am here")); // I Am Here
