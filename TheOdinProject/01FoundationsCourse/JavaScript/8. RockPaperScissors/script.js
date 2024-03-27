// Define rock, paper & scissors
rock = 'Rock' ;
paper = 'Paper';
scissors = "Scissors";

// Define player selection and computer selection
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

function playRound(playerSelection, computerSelection) {
  let playerSelection = prompt('Rock, Paper or Scissors?');
  playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
  const computerSelection = getComputerChoice(rock, paper, scissors);
  
  if (playerSelection == "Rock") {
    if (computerSelection == "Scissors")
      return (
        playerScore++,
        `Result: You Win! ${playerSelection} beats ${computerSelection}`
      );
    else if (computerSelection == "Paper")
      return (
        computerScore++,
        `Result: You Lose! ${computerSelection} beats ${playerSelection}`
      );
    else return "Tie Game!";
  } 
  
  else if (playerSelection == "Paper") {
    if (computerSelection == "Rock")
      return (
        playerScore++,
        `Result: You Win! ${playerSelection} beats ${computerSelection}`
      );
    else if (computerSelection == "Scissors")
      return (
        computerScore++,
        `Result: You Lose! ${computerSelection} beats ${playerSelection}`
      );
    else return "Tie Game!";
  } 
  
  else if (playerSelection == "Scissors") {
    if (computerSelection == "Paper")
      return (
        playerScore++,
        `Result: You Win ${playerSelection} beats ${computerSelection}`
      );
    else if (computerSelection == "Rock")
      return (
        computerScore++,
        `Result: You Lose! ${computerSelection} beats ${playerSelection}`
      );
    else return "Tie Game!";
  } 
  
  else return alert("Invalid Input: Please choose between Rock, Paper, and Scissors.");
}
// Loop playRound 5 times and determine the winner
function playGame() {
  for (let rounds = 0; rounds < 5; rounds++) {
    console.log(playRound(playerSelection, computerSelection));
    console.log('Your score: ' + playerScore);
    console.log('Computer score: ' + computerScore);
    console.log('----------------------------------')
  }
  if (playerScore > computerScore) {
    console.log('You win with a score of ' + playerScore + ' and the computer had: ' + computerScore);
  }
  else if (computerScore > playerScore) {
    console.log('You lose! ' + 'The computers score was ' + computerScore + ' and you had ' + playerScore);
  }
  else {
    console.log('Its a tie! With an equal score of ' + playerScore + ' to ' + computerScore);
  }
}

playGame();