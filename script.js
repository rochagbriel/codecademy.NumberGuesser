let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// This function generate random numbers between 0 and 9
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}
// console.log(generateTarget())  // Uncomment to test

// This is a compair function
const compareGuesses = (humanGuess, computerGuess, targetSecret) => {
        if ((humanGuess > 9) || (humanGuess < 0)) {
        return alert(`ERROR! 
        Please select a number from 0 to 9.`);
    }
    { 
    if (Math.abs(humanGuess - targetSecret) <= Math.abs(computerGuess - targetSecret)) {
        return true;
    } else {
        return false;
    }
}
}
// console.log(compareGuesses(1,2,6)) // Result should be "false"

const updateScore = (winner) => {
    if (winner === 'human') {
        return ++humanScore
    } else {
        return ++computerScore
    }
}

const advanceRound = () => {
    return ++currentRoundNumber;
}
a
