console.log("PS18: Remove First and Last Character");
console.log('__________________________________________________________________________________________________')

/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters 
of a string. 
You're given one parameter, the original string. You don't have to worry with strings with less
than two characters.
*/

function removeChar(str) {
    let resStr = '';
    for (let i = 1; i < str.length -1; i++) {
        resStr += str[i];
    }
    return resStr;
};

//  return str.slice(1, -1);

console.log(removeChar('mariana'))