console.log("PS 67: Find The Smallest Integer In The Array");
console.log('__________________________________________________________________________________________________')

/*
DESCRIPTION:
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

class SmallestIntegerFinder {
    static findSmallestInt(args) {
      args.sort((a, b) => a - b);

      for(let i = 0; i < args.length; i++) {
        return args[0]
      }
    }
}

console.log(SmallestIntegerFinder.findSmallestInt([34, 15, 88, 2]))
console.log(SmallestIntegerFinder.findSmallestInt([34, -345, -1, 100]))