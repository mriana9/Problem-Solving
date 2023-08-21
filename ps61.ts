console.log("PS 61: Convert A Number To A String");
console.log('__________________________________________________________________________________________________')


/*
DESCRIPTION:
We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"
*/

function numberToString(num) {
    // Return a string of the number here!
    //return `${num}`;
    return num.toString();
}

  console.log(numberToString(123))