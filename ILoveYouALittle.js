const howMuchILoveYou = (nbPetals) => {
  const phrase = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  if (nbPetals <= 6) return phrase[nbPetals - 1];
  if (nbPetals > 6) {
    let index = nbPetals % 6;
    if (index === 0) return phrase[index + 5];
    if (index > 0) return phrase[index - 1];
  }
};

console.log(howMuchILoveYou(7)); // I love you
console.log(howMuchILoveYou(3)); // a lot
console.log(howMuchILoveYou(6)); // not at all
console.log(howMuchILoveYou(13)); // I love you
console.log(howMuchILoveYou(24)); // not at all
