let playerScore = 0;
const allButtons = document.querySelectorAll('.rpsButton');


const playerScoreDisplay = document.querySelector('#player-score');
const handsDisplay = document.querySelector('#hands');
const resultDisplay = document.querySelector('#result');

const resetButton = document.querySelector('#endGameButton');

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
    playerScore --;
    resultDisplay.innerText = 'You Lose'
  }

  playerScoreDisplay.innerText = `Player score: ${playerScore}`
}
allButtons.forEach(button => {
  button.addEventListener('click', playGame);
});


// console.log(playerScore)

const getComputerChoice = () => {
  let options = [];
  allButtons.forEach(button => {
    options.push(button.value)
    
  });
  const randomIndex = Math.floor(Math.random() * options.length)
  return options[randomIndex]
}

// console.log(getComputerChoice())

const resetGame = () => {
  playerScore = 0;
  playerScoreDisplay.innerText = `Your Score is ${playerScore}`;
  handsDisplay.innerText = '';
  resultDisplay.innerText = '';


}
resetButton.addEventListener('click', resetGame);