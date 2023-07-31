console.log("PS9: Invert Values");
console.log('__________________________________________________________________________________________________')

/*
DESCRIPTION:
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
*/

function invert(array) {
    let myarr =[]
    for (let i = 0; i < array.length; i++) {
        let result = array[i]  * -1
        myarr.push(result);
    }

    return myarr
}

console.log(invert([ 1, 2,-7, 3,9]))