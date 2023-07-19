function friend(friends) {
  let result = friends.filter((friend) => friend.length === 4);
  return result;
}

console.log(friend(["Hannah", "Mark", "Tiffany", "Michael", "Ryan"])); // ['Mark', 'Ryan']
