console.log("PS 33: Drink About");
console.log('__________________________________________________________________________________________________')

/*
DESCRIPTION:
Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"
*/

function peopleWithAgeDrink(old) {
    let result = ''
        if ( old < 14){
            return  result += 'drink toddy';
        }

        else if ( old < 18){
            return result += 'drink coke';
        }

        else if ( old < 21){
            return result += 'drink beer';
        }

        else {
            result += 'drink whisky'
        }

    return result;

}

console.log(peopleWithAgeDrink(13));
console.log(peopleWithAgeDrink(17));
console.log(peopleWithAgeDrink(18));
console.log(peopleWithAgeDrink(20));
console.log(peopleWithAgeDrink(30));