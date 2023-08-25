console.log("PS 80: Convert Number To Reversed Array Of Digits");
console.log('__________________________________________________________________________________________________')

/*
DESCRIPTION:
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/

function digitize(n) {
    //code here
    let mystr = n.toString();
    let result = [];

    for(let i = mystr.length -1; i >= 0; i--) {
        result.push(parseInt(mystr[i]));
    }

    return  result;
}

console.log(digitize(35231));
console.log(digitize(0));

