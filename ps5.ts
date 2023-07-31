console.log("PS5: Complete the solution so that it reverses the string passed into it.");
console.log('__________________________________________________________________________________________________')

/*Examples
'world'  =>  'dlrow'
'word'   =>  'drow'
*/

function solution(str){
    let resStr = '';
    for ( let i = str.length - 1; i >= 0; i--){
      resStr += str[i];
    }
    
    return resStr;
}

console.log(solution("word"));
console.log(solution("world"));
