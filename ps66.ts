console.log("PS 66: Grasshopper - Terminal Game Combat Function");
console.log('__________________________________________________________________________________________________')

/*
DESCRIPTION:
Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
*/

function combat(health, damage) {
    // Write your code here
    let result = health - damage;
    if (result > 0){
        return result;
    }
    else {
        return 0;
    }
}

console.log(combat(100, 5)); //95
console.log(combat(92, 8)); //84
console.log(combat(20, 30));  //Health cannot go below 0