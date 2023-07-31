console.log("PS4: Create a function that takes an integer as an argument and returns Even for even numbers or Odd for odd numbers");
console.log('__________________________________________________________________________________________________')

/*Examples
  2 --> even
  7 --> odd
 -42 --> even
 -7 --> odd
  0 --> even
*/

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "even";
  }
  else {
    return "odd";
  }
}

console.log(evenOrOdd(2));
console.log(evenOrOdd(7));
console.log(evenOrOdd(-42));
console.log(evenOrOdd(-7));
console.log(evenOrOdd(0));