// creating a Rock Paper Scissors game - Lets gooooo

let selection = ["Rock" , "Paper", "Scissors"]

// computer chooses Rock, Paper or Scissors

function computerPlay() {
    let randomPick = selection[Math.floor(Math.random() * selection.length)];
    alert(randomPick);
}

// single round of play

function playRound(playerSelection, computerSelection) {

    computerSelection = computerPlay();
    playerSelection = prompt('Please choose Rock, Paper, or Scissors', );

    if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        alert('Rock beats Scissors. Player wins!');
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        alert('Paper beats Rock. Computer wins!');
    }
    else if (playSelection == 'Paper' && computerSelection == 'Rock') {
        alert('Paper beats Rock. Player wins!');
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        alert('Scissors beats Paper. Computer wins!');
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        alert('Rock beats Scissors. Computer wins!');
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        alert('Scissors beats Paper. Player wins!');
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Paper') {
        alert("Both parties chose Paper. It's a draw");
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Rock') {
        alert("Both parties chose Rock. It's a draw");
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Scissors') {
        alert("Both parties chose Scissors. It's a draw");
    }
    else {
        alert('Something went wrong');
    }
}

playRound();