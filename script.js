/*----------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
This is the Rock, Paper and Scissors Game.

a. Declared a variable playerScore = Total score of the game

b. allButtons: Grabed all the button for Rock, Paper, and Scissors from the html

c. playerScoreDisplay: Displays the player score on the Html page.

d. handsDisplay: Displays the selctions for both Human and Computer on the html page.

e. resultDisplay: Displays who wins the game on the html page.

f. resetButton: This ends and resets the Game
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------*/ 
let playerScore = 0;

const allButtons = document.querySelectorAll('.rpsButton');

const playerScoreDisplay = document.querySelector('#player-score');

const handsDisplay = document.querySelector('#hands');

const resultDisplay = document.querySelector('#result');

const resetButton = document.querySelector('#endGameButton');

/*This function grabs the player and computer's choice and compairs both and 
displays the Winner and updates the corresponding score*/
const playGame = (e) => {
  const playerChoice = e.target.value;
  const computerChoice = getComputerChoice();

  handsDisplay.innerText = `You chose: ${playerChoice} VS Computer chose: ${computerChoice}`;


  if (playerChoice === computerChoice) {
    resultDisplay.innerText = "It's a Draw";
  }
  else if (playerChoice === 'Rock' && computerChoice === 'Scissors'
    || playerChoice === 'Scissors' && computerChoice === 'Paper'
    || playerChoice === 'Paper' && computerChoice === 'Rock') {
    playerScore += 1;
    resultDisplay.innerText = 'You Win';
  }
  else {
    playerScore--;
    resultDisplay.innerText = 'You Lose'
  }

  playerScoreDisplay.innerText = `Player score: ${playerScore}`
}

//Loop that listens to user's selection and calls the playGame() 
allButtons.forEach(button => {
  button.addEventListener('click', playGame);
});


// This function gets the computer choice

const getComputerChoice = () => {
  let options = [];
  allButtons.forEach(button => {
    options.push(button.value)
  });

  const randomIndex = Math.floor(Math.random() * options.length)
  return options[randomIndex]
}

// This function resets the game

const resetGame = () => {
  playerScore = 0;
  playerScoreDisplay.innerText = `Your Score is ${playerScore}`;
  handsDisplay.innerText = '';
  resultDisplay.innerText = '';
}

// This calls the resetGame function when we click the reset button
resetButton.addEventListener('click', resetGame);