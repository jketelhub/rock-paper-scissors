// creating a Rock Paper Scissors game - Lets gooooo

let selection = ["Rock" , "Paper", "Scissors"]

let playerScore = 0, computerScore = 0;

// computer chooses Rock, Paper or Scissors

function computerPlay() {
    let randomPick = selection[Math.floor(Math.random() * selection.length)];
    return randomPick;
}

// single round of play

function playRound(playerSelection, computerSelection) {

    computerSelection = computerPlay();
    playerSelection = prompt('Please choose Rock, Paper, or Scissors', );

    // Below two lines allows input to be case insensitive

    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    console.log('Player chose ' + playerSelection);
    console.log('Computer chose ' + computerSelection);

    if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        console.log('Rock beats Scissors. Player wins!');
        playerScore = playerScore + 1;
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        console.log('Paper beats Rock. Computer wins!');
        computerScore = computerScore + 1;
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        console.log('Paper beats Rock. Player wins!');
        playerScore = playerScore + 1;
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        console.log('Scissors beats Paper. Computer wins!');
        computerScore = computerScore + 1;
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        console.log('Rock beats Scissors. Computer wins!');
        computerScore = computerScore + 1;
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        console.log('Scissors beats Paper. Player wins!');
        playerScore = playerScore + 1;
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Paper') {
        console.log("Both parties chose Paper. It's a draw");
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Rock') {
        console.log("Both parties chose Rock. It's a draw");
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Scissors') {
        console.log("Both parties chose Scissors. It's a draw");
    }
    else {
        console.log('Something went wrong. Please retry and enter a valid option');
    }
}

function game() {

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    console.log('Player Score: ' + playerScore + ' Computer Score: ' + computerScore); // Final scores displayed

    if (playerScore > computerScore) {
        console.log('Player wins the game!')
    }   
    else if (computerScore > playerScore) {
        console.log('Computer wins the game!')
    }
    else {
        console.log("It's a draw!")
    }
    
}

game();