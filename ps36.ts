console.log("PS 36: Rock Paper Scissors!");
console.log('__________________________________________________________________________________________________')

/*
DESCRIPTION:
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):
"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

const rps = (p1, p2) => {
    let result = '';
    if (p1 === p2){
        result += 'Draw!'
    }
    else if (p1 === 'scissors' && p2 === 'paper') {
        result += 'Player 1 won!'
    }
    else if (p1 === 'paper' && p2 === 'rock'){
        result += 'Player 1 won!'
    }
    else if (p1 === 'rock' && p2 === 'scissors'){
        result += 'Player 1 won!'
    }
    else {
        result += 'Player 2 won!'
    }

    return result;
};

console.log(rps('rock', 'rock')); //Draw!
console.log(rps('scissors', 'scissors')); //Draw!
console.log(rps('paper', 'paper')); //Draw!

console.log(rps('scissors', 'rock')); //Player 2 won!
console.log(rps('paper', 'scissors')); //Player 2 won!
console.log(rps('rock', 'paper')); //Player 2 won!

console.log(rps('rock', 'scissors')); //Player 1 won!
console.log(rps('scissors', 'paper')); //Player 1 won!
console.log(rps('paper', 'rock')); //Player 1 won!
