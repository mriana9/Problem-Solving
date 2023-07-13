console.log("Q4: Write an algorithm to print the below pattern");
console.log('_________________________________________________')
/*
* * * * * *
*         *
*         *
*         *
* * * * * *
*/

let n4 = 5;
let string4 = "";

for(let i = 0; i < n4; i++) {
  for(let j = 0; j < n4; j++) {
    if(i === 0 || i === n4 - 1 ||j === 0 || j === n4 - 1) {
      string4 += "*";
    }
    else {
    string4 += " ";// space between col stars

    }
    string4 += " ";// space between row stars
  }
  string4 += "\n";
}

console.log(string4);