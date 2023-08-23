console.log("PS 73: Replace All Vowel To Exclamation Mark In The Sentence");
console.log('__________________________________________________________________________________________________')

/*
Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/

function replace(s){
    //coding and coding....
    let result = '';
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] ==='u' 
        || s[i] === 'A' || s[i] === 'E' || s[i] === 'I' || s[i] === 'O' || s[i] === 'U'){
            result += '!';
        }
        else {
            result += s[i];
        }
    }
    return result;
}

console.log(replace('Hi!')); // H!!