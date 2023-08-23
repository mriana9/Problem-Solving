console.log("PS 70: Get The Mean Of An Array");
console.log('__________________________________________________________________________________________________')
/*
DESCRIPTION:
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/


function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    let sum = 0;
    let avg = 0;

    for(let i = 0; i < marks.length; i++){
        sum += marks[i];
        avg = sum/ marks.length;
    }

    return Math.floor(avg);
}

console.log(getAverage([2,2,2,2])); //2
console.log(getAverage([1,2,3,4,5,])); //3 
console.log(getAverage([1,1,1,1,1,1,1,2])); //1