console.log("PS14: Draw stairs");
console.log('__________________________________________________________________________________________________')

/*
Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.
For example n = 3 result in:

I
 I
  I


*/

// function drawStairs(n) {
//     let stairs = '';

//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < i; j++) {
//             stairs += ' ';
//         }
//         stairs += 'I';
//         if (i !== n - 1) {
//             stairs += '\n';
//         }
//     }

//     return stairs;
// }

function drawStairs(n) {
    let stair = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if ( i == j ) {
                stair += String.fromCharCode(73);
            }
            stair += ' ';
        }
        stair += '\n';
    }
    return stair;
}
console.log(drawStairs(5));


/*
function drawStairs(n) {
  let stairs = "";
  
  for(i=0; i<n; i++){
    for(j=0; j<i; j++){
      stairs += " ";
    }
    stairs  += "I";
    if(i < n-1){
      stairs += "\n";
    }
  }
  
  return stairs;
}
*/