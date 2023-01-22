function findShortestStringRecursive(arr) {
  // if length of array is 1, return first and the only one element
  if (arr.length === 1) {
    return arr[0];
  }

  // store calling recursive function in a variable
  let result = findShortestStringRecursive(arr.slice(1));

  // if the current element is shorter than any other, return that element, if no - return recursive function
  return arr[0].length <= result.length? arr[0] : result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
