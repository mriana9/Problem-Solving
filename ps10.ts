console.log("PS10: Remove Exclamation Marks ");
console.log('__________________________________________________________________________________________________')

/*Examples
Mariana! --> Mariana
*/

function removeExclamationMarks(s) {
    let mystr = ''
      for (let i = 0; i < s.length ; i++) {
          if (s[i] === '!'){
              mystr += ''
              //continue
          }
          else {
              mystr += s[i]
          }
      }
  
      return mystr;
}

console.log(removeExclamationMarks("Mariana!"));