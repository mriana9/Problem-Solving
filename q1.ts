console.log("Q1: Write an algorithm to print the below pattern");
console.log('_________________________________________________')
/*
***********
*     *
*     *
*     *
*     *
*     *
*     *
***********
*/

let n = 8; // row or column count
let string = "";

for(let i = 0; i < n; i++) {
  for(let j = 0; j < n; j++) {
    if(i === 0 || i === n - 1) {
      string += "*";// first and last row stars
    }
    else {
      if(j === 0 || j === n - n/2) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  string += "\n";
}
console.log(string);