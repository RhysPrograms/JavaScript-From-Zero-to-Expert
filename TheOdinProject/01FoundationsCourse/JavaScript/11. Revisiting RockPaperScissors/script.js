// Retrieve References to the Buttons
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const result = document.getElementById("result");
const refreshButton = document.getElementById("refreshButton");

// Adding Event Listeners
rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));
refreshButton.addEventListener("click", () => location.reload());

// Defining Scores
let playerScore = 0;
let computerScore = 0;
let winningScore = 5;

// Getting the computers choice at random
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Playing a single Round
function playRound(playerSelection) {
  playerSelection =
    playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
  const computerSelection = getComputerChoice();

  // Determine the Winner of this Round
  if (playerSelection === "Rock") {
    if (computerSelection === "Scissors") {
      playerScore++;
      result.textContent = `Result: You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (computerSelection === "Paper") {
      computerScore++;
      result.textContent = `Result: You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      result.textContent = "Tie Game!";
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      playerScore++;
      result.textContent = `Result: You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (computerSelection === "Scissors") {
      computerScore++;
      result.textContent = `Result: You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      result.textContent = "Tie Game!";
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Paper") {
      playerScore++;
      result.textContent = `Result: You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (computerSelection === "Rock") {
      computerScore++;
      result.textContent = `Result: You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      result.textContent = "Tie Game!";
    }
  } else {
    alert("Invalid Input: Please choose between Rock, Paper, and Scissors.");
  }

  if (playerScore === winningScore || computerScore === winningScore) {
    declareWinner();
  }
}

// Function to Declare the Winner
function declareWinner() {
  const overallWinner = document.createElement("p");
  overallWinner.id = "overallWinner";
  document.body.appendChild(overallWinner);
  overallWinner.style.color = "white";

  if (playerScore > computerScore) {
    overallWinner.textContent =
      "You win with a score of " +
      playerScore +
      " and the computer had: " +
      computerScore;
  } else if (computerScore > playerScore) {
    overallWinner.textContent =
      "You lose! The computer's score was " +
      computerScore +
      " and you had " +
      playerScore;
  } else {
    overallWinner.textContent =
      "It's a tie! With an equal score of " +
      playerScore +
      " to " +
      computerScore;
  }

  // Disable the Buttons, after the Game
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}
