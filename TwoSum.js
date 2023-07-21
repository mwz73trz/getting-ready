const twoSum = (numbers, target) => {
  let results = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        results.push(i);
        results.push(j);
        return results;
      }
    }
  }
};

console.log(twoSum([1, 2, 3], 4)); // [0, 2]
console.log(twoSum([1234, 5678, 9012], 14690)); // [1, 2]
console.log(twoSum([2, 2, 3], 4)); // [0, 1]
console.log(twoSum([2, 3, 1], 4)); // [1, 2]
console.log(twoSum([-1, 2, -1], -2)); // [0, 2]
console.log(
  twoSum(
    [
      930, -946, -313, -631, -530, 163, 869, 172, -660, -272, 693, 283, 179,
      -215, -261, -929, -238, 237, 872, -572, 378, -84, -142, -419, 232, 104,
      467, 773, 503, 634, 172, -718, 420, -315, -988, 86, -144, -73, -587, -238,
      -115, -238, -579, 265, -509, 435, -477, -17, -521, 409, -230, -111, 185,
      319, -412, 855, -397, 65, -693, -552, -278, 982, 702, -615, 192, -620,
      310, 584, 620, 260, -716, -738, -547, -995, -67, -878, -504, 427, 918,
      425, 725, 917, -761, -731, 807, -412, -219, 66, -66, -89, 557, 806, -949,
      -811, 860,
    ],
    -521
  )
); // []