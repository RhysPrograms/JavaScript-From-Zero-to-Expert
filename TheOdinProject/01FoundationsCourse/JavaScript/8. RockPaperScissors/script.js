// Define scores
let playerScore = 0;
let computerScore = 0;

// Get the computers choice at random
function getComputerChoice(rock, paper, scissors) {
  const choices = [rock, paper, scissors];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound() {
  let computerSelection = getComputerChoice();
  let playerSelection = window.prompt("Rock, Paper, or Scissors?:");

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

// Loop playRound 5 times and determine the winner
function playGame() {
  for (let rounds = 0; rounds < 5; rounds++) {
    console.log(playRound(playerSelection, computerSelection));
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
    console.log("-------------------------------");
  }
  if (playerScore > computerScore) {
    console.log(`You win! With a score of ${playerScore} to ${computerScore}`);
  } 
  
  else if (computerScore > playerScore) {
    console.log(`You lose! With a score of ${playerScore} to ${computerScore}`);
  } 
  
  else {
    console.log(`Its a tie! With an equal score of ${playerScore} to ${computerScore}`);
  }
}

playGame();
