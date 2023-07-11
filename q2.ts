console.log("Q2: Write an algorithm to print the below pattern");
console.log('_________________________________________________')
/*
*********
 *******
  *****
   ***
    *
*/
let n2 = 8;
let string2 = '';

for (let i = 0; i < n2; i++) {
    for (let j = 0; j < n2; j++) {
        if (j > i){
            string2+= "*"
        }
        string2+= " "
    }
    string2+= "\n"
}

console.log(string2)

