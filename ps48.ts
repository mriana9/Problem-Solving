console.log("PS 48: Sum Of Differences In Array");
console.log('__________________________________________________________________________________________________')

/*
DESCRIPTION:
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
*/

function sumOfDifferences(arr) {
    let sortArr = [];
    let result = 0;
    sortArr = arr.sort((a, b) => b - a);

    if (sortArr.length  <= 1) {
        result = 0;
    }
    else {
        for (let i = 0; i < sortArr.length - 1; i++){
            result += sortArr[i] - sortArr[i + 1];
        }
    }

    return result;
}

console.log(sumOfDifferences([1, 2, 10])); // 9
console.log(sumOfDifferences([-3, -2, -1])); // 2
