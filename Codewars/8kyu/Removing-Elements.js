// DESCRIPTION
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!
// SOLUTION
function removeEveryOther(arr) {
  let removeArr = [];
  for (let i = 0; i < arr.length; i += 2) {
    removeArr.push(arr[i]);
  }
  return removeArr;
}
console.log(removeEveryOther(['Keep', 'Remove', 'Keep', 'Remove', 'Keep']));
