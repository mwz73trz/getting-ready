function abbrevName(name) {
  tempName = name.split(" ");
  firstInitial = tempName[0][0];
  secondInitial = tempName[1][0];
  return firstInitial + "." + secondInitial;
}

console.log(abbrevName("Michael Zura"));
