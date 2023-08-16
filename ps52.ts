console.log("PS 52: If You Can't Sleep, Just Count Sheep");
console.log('__________________________________________________________________________________________________')

/*
DESCRIPTION:
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

var countSheep = function (num){
    let countSheep= '';
    if(num > 0) {
        for(let i = 1; i <= num; i++){
            countSheep+= i + ' sheep...';
        }
    }
    else if(num === 0) {
        countSheep+= '';
    }
    else {
        countSheep+= 'num most be more than zero';
    }

    return countSheep;
}

console.log(countSheep(0));// ""
console.log(countSheep(3)); //1 sheep...2 sheep...3 sheep...