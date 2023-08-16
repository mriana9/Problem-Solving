console.log("PS 51: Array Plus Array");
console.log('__________________________________________________________________________________________________')

/*
DESCRIPTION:
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

function arrayPlusArray(arr1, arr2) {
    let sumArr1 = 0;
    let sumArr2 = 0;
    for (let i = 0; i < arr1.length; i++) {
        sumArr1 += arr1[i]
    }

    for (let i = 0; i < arr2.length; i++) {
        sumArr2 += arr2[i]
    }

    return sumArr1 + sumArr2;
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); // 21
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6])); // -21
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600])); // 2100