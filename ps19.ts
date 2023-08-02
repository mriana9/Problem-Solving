console.log("PS19: String repeat");
console.log('__________________________________________________________________________________________________')

/*
DESCRIPTION:
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

function repeatStr (n, s) {
    let result = ''
    for (let i = 0; i < n; i++){
        result += s;
    }

    return result ;
}

//  return s.repeat(n);


console.log(repeatStr(3,'*'));