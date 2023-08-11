console.log("PS 41: Abbreviate a Two Word Name");
console.log('__________________________________________________________________________________________________')

/*
DESCRIPTION:
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbrevName(name){
    let secondName = '';
    for(let i = 0; i < name.length; i++){
        if(name[i] === ' '){
            secondName = name[i+ 1];
        }
    }
    return (name[0] + '.' + secondName).toUpperCase();
}

console.log(abbrevName('mariana algafy'));