console.log("PS 76: Twice As Old");
console.log('__________________________________________________________________________________________________')

/*
DESCRIPTION:
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
*/

function twiceAsOld(dadYearsOld, sonYearsOld) {
    // your code here
    let result = sonYearsOld * 2;
    return  dadYearsOld - result < 0 ? (dadYearsOld - result) * -1 : dadYearsOld - result
}

console.log(twiceAsOld(36,7)); //22
console.log(twiceAsOld(55,30)); //5
console.log(twiceAsOld(29,0)); //29