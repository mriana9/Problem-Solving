console.log("PS22: Beginner Series #2 Clock");
console.log('__________________________________________________________________________________________________')

/*
DESCRIPTION:
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
*/

function past(h, m, s){
    //#Happy Coding! ^_^
    let oneSec = 1000;
    let oneMin = 60 * oneSec;
    let oneHour = 60 * oneMin;

    return h*oneHour + m*oneMin + s*oneSec;
}

console.log(past(0,1,1));