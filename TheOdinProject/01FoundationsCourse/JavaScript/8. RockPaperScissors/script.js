// Define the player selection, and the computer selection
let playerSelection = '';
const computerSelection = '';

// Define scores
let playerScore = 0;
let computerScore = 0;

// Get the computers choice at random
function getComputerChoice(rock, paper, scissors) {
  const choices = [rock, paper, scissors];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playGame() {
  {
    function playRound() {
    computerSelection = getComputerChoice();
    playerSelection = window.prompt("Rock, Paper, or Scissors?:");

      if (playerSelection.toLowerCase == "rock") {
        if (computerSelection == "scissors")
          return (
            playerScore++,
            `Result: You Win! ${playerSelection} beats ${computerSelection}`
          );
        else if (computerSelection == "paper")
          return (
            computerScore++,
            `Result: You Lose! ${computerSelection} beats ${playerSelection}`
          );
        else return "Tie Game!";
      } 
      
      else if (playerSelection.toLowerCase == "paper") {
        if (computerSelection == "rock")
          return (
            playerScore++,
            `Result: You Win! ${playerSelection} beats ${computerSelection}`
          );
        else if (computerSelection == "scissors")
          return (
            computerScore++,
            `Result: You Lose! ${computerSelection} beats ${playerSelection}`
          );
        else return "Tie Game!";
      } 
      
      else if (playerSelection.toLowerCase == "scissors") {
        if (computerSelection == "paper")
          return (
            playerScore++,
            `Result: You Win ${playerSelection} beats ${computerSelection}`
          );
        else if (computerSelection == "rock")
          return (
            computerScore++,
            `Result: You Lose! ${computerSelection} beats ${playerSelection}`
          );
        else return "Tie Game!";
      } 
      
      else return "Invalid Input: Please choose between Rock, Paper, and Scissors.";
    }
  }

  function totalScore() {
    if (playRound == 5) {
      if (playerScore > computerScore) {
        console.log(`You win, with a score of ${playerScore} to the computers: ${computerScore}`);
      } 
      
      else if (computerScore > playerScore) {
        console.log(`You lose, with a score of ${playerScore} to the computers: ${computerScore}`);
      } 
      
      else {
        console.log(`Its a tie! With an equal score of ${playerScore} to ${computerScore}`);
      }
    }
  }
}

playRound();
playRound();
playRound();
playRound();
playRound();