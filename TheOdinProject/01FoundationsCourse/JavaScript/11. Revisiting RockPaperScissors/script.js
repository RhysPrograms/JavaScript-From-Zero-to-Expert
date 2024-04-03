// Creating the Rock, Paper & Scissors Buttons
// These Elements are always required, therefore I have only created them on the DOM for additional practice
// Defining Rock
const rock = document.createElement("button");
rock.classList.add("rock");
document.querySelector("rock");
document.body.appendChild(rock);
rock.textContent = "Rock";

// Defining Paper
const paper = document.createElement("button");
paper.classList.add("paper");
document.querySelector("paper");
document.body.appendChild(paper);
paper.textContent = "Paper";

// Defining Scissors
const scissors = document.createElement("button");
scissors.classList.add("scissors");
document.querySelector("scissors");
document.body.appendChild(scissors);
scissors.textContent = "Scissors";

document.querySelector("results");

// Define rock, paper & scissors
rock = "Rock";
paper = "Paper";
scissors = "Scissors";

// Adding Event Listeners
rock.addEventListener("click", () => {
  playRound();
});

paper.addEventListener("click", () => {
  playRound();
});

scissors.addEventListener("click", () => {
  playRound();
});

// // Define player selection and computer selection
// let playerSelection;
// let computerSelection;

// // Define scores
// let playerScore = 0;
// let computerScore = 0;

// // Get the computers choice at random
// function getComputerChoice(rock, paper, scissors) {
//   const choices = [rock, paper, scissors];
//   return choices[Math.floor(Math.random() * choices.length)];
// }

// function playRound(playerSelection, computerSelection) {
//   playerSelection =
//     playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
//   const computerSelection = getComputerChoice(rock, paper, scissors);

//   if (playerSelection == "Rock") {
//     if (computerSelection == "Scissors")
//       return (
//         playerScore++,
//         (results.textContent = `Result: You Win! ${playerSelection} beats ${computerSelection}`)
//       );
//     else if (computerSelection == "Paper")
//       return (
//         computerScore++,
//         (results.textContent = `Result: You Lose! ${computerSelection} beats ${playerSelection}`)
//       );
//     else return "Tie Game!";
//   } else if (playerSelection == "Paper") {
//     if (computerSelection == "Rock")
//       return (
//         playerScore++,
//         (results.textContent = `Result: You Win! ${playerSelection} beats ${computerSelection}`)
//       );
//     else if (computerSelection == "Scissors")
//       return (
//         computerScore++,
//         (results.textContent = `Result: You Lose! ${computerSelection} beats ${playerSelection}`)
//       );
//     else return "Tie Game!";
//   } else if (playerSelection == "Scissors") {
//     if (computerSelection == "Paper")
//       return (
//         playerScore++,
//         (results.textContent = `Result: You Win ${playerSelection} beats ${computerSelection}`)
//       );
//     else if (computerSelection == "Rock")
//       return (
//         computerScore++,
//         (results.textContent = `Result: You Lose! ${computerSelection} beats ${playerSelection}`)
//       );
//     else return "Tie Game!";
//   } else
//     return alert(
//       "Invalid Input: Please choose between Rock, Paper, and Scissors."
//     );
// }
// // Loop playRound 5 times and determine the winner
// // function playGame() {
// //   for (let rounds = 0; rounds < 5; rounds++) {
// //     console.log(playRound(playerSelection, computerSelection));
// //     console.log('Your score: ' + playerScore);
// //     console.log('Computer score: ' + computerScore);
// //     console.log('----------------------------------')
// //   }
// //   if (playerScore > computerScore) {
// //     console.log('You win with a score of ' + playerScore + ' and the computer had: ' + computerScore);
// //   }
// //   else if (computerScore > playerScore) {
// //     console.log('You lose! ' + 'The computers score was ' + computerScore + ' and you had ' + playerScore);
// //   }
// //   else {
// //     console.log('Its a tie! With an equal score of ' + playerScore + ' to ' + computerScore);
// //   }
// // }

// // playGame();
