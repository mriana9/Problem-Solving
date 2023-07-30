console.log("PS1: This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.");
console.log('__________________________________________________________________________________________________')

/*Examples
2 --> 16
1 --> 9
8 --> 64
4 --> 32
5 --> 45
*/

function simpleMultiplication(number) {
    if (number%2 == 0) {
        return number * 8;
    }
    
    return number * 9;

    //return number % 2 == 0 ? 0 : number * 8 : number * 9
}

console.log(simpleMultiplication(4));
console.log(simpleMultiplication(2));
console.log(simpleMultiplication(1));
console.log(simpleMultiplication(3));
