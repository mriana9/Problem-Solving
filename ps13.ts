console.log("PS13: Calculate average");
console.log('__________________________________________________________________________________________________')

function findAverage(array) {
    let sum = 0;
    let avg = 0;

    if (array.length == 0) {
        return 0
    }
    else {
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }

        return avg = sum / array.length;
    }
}
console.log(findAverage([1, 1, 1]));
console.log(findAverage([1, 2, 3]));
console.log(findAverage([1, 2, 3, 4]));
console.log(findAverage([])); // returns 0
