const twiceAsOld = (dad, son) => {
  let son2 = son * 2;
  if (son2 === dad) return 0;
  if (son2 > dad) return son2 - dad;
  if (son2 < dad) return dad - son2;
};

console.log(twiceAsOld(36, 7)); // 22
console.log(twiceAsOld(55, 30)); // 5
console.log(twiceAsOld(42, 21)); // 0
