console.log("PS 39:Get Nth Even Number");
console.log('__________________________________________________________________________________________________')

/*
DESCRIPTION:
Return the Nth Even Number

Example(Input --> Output)

1 --> 0 (the first even number is 0)
3 --> 4 (the 3rd even number is 4 (0, 2, 4))
100 --> 198
1298734 --> 2597466
The input will not be 0.
*/

function nthEven(n){
    let result = 0;
    for(let i = 1; i < n; i++){
        result += 2;
    }
    return result;
    // return 2 * (n - 1);
}

console.log(nthEven(0));
console.log(nthEven(3));
console.log(nthEven(100));
console.log(nthEven(1298734));