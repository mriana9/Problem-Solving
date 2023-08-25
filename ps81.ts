console.log("PS 81: Is it A Palindrome");
console.log('__________________________________________________________________________________________________')


/*
Write a function that checks if a given string (case insensitive) is a palindrome. A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama".
*/

function isPalindrome(x) {
    let m = x.toUpperCase();
    for (let i = 0; i < m.length; i++) {
        if (m[i] !== m[m.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(isPalindrome("aba")); // true
console.log(isPalindrome("hello")); // false