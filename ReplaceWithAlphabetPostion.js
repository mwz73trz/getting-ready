function alphabetPostion(text) {
  let upperText = text.toUpperCase();
  let arr = upperText.split("").map((let) => let.charCodeAt());
  let newArr = arr.filter((num) => {
    if (num > 64 && num < 91) {
      return num;
    }
  });
  let updatedNumsArr = newArr.map((num) => num - 64);
  return updatedNumsArr.join(" ");
}

console.log(alphabetPostion("a bc a b c d")); // 1 2 3 2 2 3 4
