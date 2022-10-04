const choice = ['rock', 'paper', 'scissors']
function getComputerChoice(choice) {
  return choice[Math.floor(Math.random() * choice.length)]
}

// console.log(getComputerChoice(choice))
let playerSelection = ''
let computerSelection = ''

let computerScore = 0
let playerScore = 0

function playRound(playerSelection, computerSelection) {
  playerSelection = getComputerChoice(choice)
  computerSelection = getComputerChoice(choice)

  console.log('Player selection: ' + playerSelection)
  console.log('Computer selection: ' + computerSelection)
  console.log('*'.repeat(50))
  if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')
  ) {
    console.log(`You lose, ${computerSelection} beats ${playerSelection}`)
    return computerScore++
  } else if (playerSelection === computerSelection) {
    console.log(`It's a draw`)
    return 
  } else {
    console.log(`You win, ${playerSelection} beats ${computerSelection}`)
    return playerScore++
  }
}

function getWinner(){
    if (computerScore> playerScore){
        console.log(`Computer won`);
    } else if (playerScore > computerScore) {
        console.log(`User won`);
    } else {
        console.log(`It's a tie`);
    }
}


function game() {
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection)
    console.log(playerScore)
    console.log(computerScore)
  }
}

game()
getWinner();;
