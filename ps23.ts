console.log("PS23: altERnaTIng cAsE <=> ALTerNAtiNG CaSe");
console.log('__________________________________________________________________________________________________')

/*
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
*/

String.prototype.toAlternatingCase = function () {
    let result = '';
    for (let i = 0; i < this.length; i++) {
      if (this[i] === this[i].toLowerCase()) {
        result += this[i].toUpperCase();
      } else if (this[i] === this[i].toUpperCase()) {
        result += this[i].toLowerCase();
      } else {
        result += this[i];
      }
    }
    return result;
};

console.log('hello world'.toAlternatingCase()); 
