function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}

console.log(
  find(
    "The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition",
    "@"
  )
);
console.log(find("code your future", "a"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find - it is increasing by one till while loop condition is complied
// b) What is the if statement used to check - it checks if the character is comply the character with specific index inside the string (as well considers its data type)
// c) Why is index++ being used? - because we need to implement the function till we find the required character
// d) What is the condition index < str.length used for? - it used for iteration the while loop till we are inside of number the string character
