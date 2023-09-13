console.log("PS 82: Reversed Words");
console.log('__________________________________________________________________________________________________')

/*
DESCRIPTION:
Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/

function reverseWords(str){
    let result = '';
    let temp = '';
    let myStr = '';

    for( let i = 0; i < str.length; i++){
        if( str[i] == ' '){
            result = temp + ' ' + result;
            temp = '';
        }
        else {
            temp += str[i];
        }
    }
    
    result = temp + ' ' + result;
    for (let i = 0; i < result.length - 1; i++){
        myStr += result[i];
    }
    return myStr;
}

console.log(reverseWords("hello world!"));