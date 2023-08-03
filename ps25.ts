console.log("PS25: Is The String Uppercase");
console.log('__________________________________________________________________________________________________')

/*
DESCRIPTION:
Is the string uppercase?
Task
Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
*/

String.prototype.isUpperCase = function() {
    for (let i = 0; i < this.length; i++) {
      if (this[i] !== this[i].toUpperCase()) {
        return false;
      }
    }
    return true;
  };

console.log('ccc'.isUpperCase());  // false
console.log('HELLO I AM DONALD'.isUpperCase()); // true
console.log('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase()); // false
