/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/  
var rollDice = function(){
    return Math.floor(Math.random()*6)+1;
}

var scores, roundScore, activePlayer, dice;

function newGame(){
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.dice').style.display = "none";
}

function game(){
    dice = rollDice();
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+ dice +'.png';
    if(dice !== 1){
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    else {
        roundScore = 0;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        activePlayer = (activePlayer + 1)%2;
    }
}

function game_hold(){
    scores[activePlayer] += roundScore;
    roundScore = 0;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    activePlayer = (activePlayer + 1)%2;
}

newGame();

document.querySelector('.btn-new').addEventListener('click',newGame);
document.querySelector('.btn-roll').addEventListener('click',game);
document.querySelector('.btn-hold').addEventListener('click',game_hold);


function fun(){
    while(scores[0]<100 && scores[1]<100){
        game();
    }
}
