
//creating variables
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

//create variables to store DOM references
let player1Scoreboard = document.getElementById('player1Scoreboard');
let player2Scoreboard = document.getElementById('player2Scoreboard');
let player1Dice = document.getElementById('player1Dice');
let player2Dice = document.getElementById('player2Dice')
const message = document.getElementById("message")
const rollBtn = document.getElementById('rollBtn')
const resetBtn = document.getElementById('resetBtn')
const winningScore = 20;


function winner(){
    rollBtn.style.display = 'none'
    resetBtn.style.display = 'inline-block'
}

//dice button
rollBtn.addEventListener('click',function(){
    let randNum = Math.floor(Math.random()*7)
  if(player1Turn){
        player1Score = player1Score + randNum
        player2Dice.classList.add('active')
        player1Dice.classList.remove('active')
        message.innerHTML = 'Player 2 turn'
        player1Scoreboard.innerHTML = player1Score
        player1Dice.textContent = randNum
        player1Turn = false;
    
    }else{
    player2Score = player2Score + randNum;
    player1Dice.classList.add('active')
    player2Dice.classList.remove('active')
    message.innerHTML = 'Player 1 turn'
    player2Scoreboard.innerHTML = player2Score
    player2Dice.textContent = randNum
    player1Turn = true
  }

  if(player1Score>=winningScore){
    message.textContent = 'Player 1 has won 😉'
    winner()
  }else if(player2Score >= winningScore){
    message.textContent = 'Player 2 has won 😉'
    winner()
  }

})


//reset button
resetBtn.addEventListener('click',function(){ 
    reset()
})

function reset(){
    message.innerHTML = 'player 1 turn'
    player1Score = 0;
    player1Scoreboard.innerHTML = 0
    player1Dice.textContent = '-'
    player2Score = 0;
    player2Scoreboard.innerHTML = 0
    player2Dice.textContent = '-'
    player1Turn =true;
    player1Dice.classList.add('active')
    player2Dice.classList.remove('active')
    rollBtn.style.display = 'inline-block'
    resetBtn.style.display = 'none'
}