console.log("PS6: Implement a function which convert the given boolean value into its string representation.");
console.log('__________________________________________________________________________________________________')

/*Examples
Note: Only valid inputs will be given.

true --> true
false --> false
*/

function booleanToString(b){
    return b === true ? "true" : "false";
}

console.log(booleanToString(true));
console.log(booleanToString(false));