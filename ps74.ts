console.log("PS 74: Convert A String To An Array");
console.log('__________________________________________________________________________________________________')


/*
DESCRIPTION:
Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

function stringToArray(string){
    let result = '';
    return result = string.split(" ");
}

console.log(stringToArray("Mariana Algafy"));