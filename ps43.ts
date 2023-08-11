console.log("PS 43: You Only Need One - Beginner");
console.log('__________________________________________________________________________________________________')

/*
DESCRIPTION:
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/

function check(a, x) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === x) {
            return true;
        }
    }

    return false;
}

console.log(check([101, 45, 75, 105, 99, 107], 45));
console.log(check(['t', 'e', 's', 't'], 'e'));