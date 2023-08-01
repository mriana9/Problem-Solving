console.log("PS16: Beginner - Reduce but Grow");
console.log('__________________________________________________________________________________________________')

/*
DESCRIPTION:
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

function grow(x){
    let myArray = 1;
    for(var i = 0; i < x.length; i++){
        myArray *= x[i];
    }

    return myArray;
}

console.log(grow([1, 2, 3]))