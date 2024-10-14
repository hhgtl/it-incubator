// DESCRIPTION
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]
// SOLUTION

const reverseSeq = (n) => {
  let arr = [];
  while (n >= 1) {
    arr.push(n);
    n--;
  }
  return arr;
};
console.log(reverseSeq(5));
