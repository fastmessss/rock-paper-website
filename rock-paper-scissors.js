let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties:0
};

updateScoreElement();

function playgame(playMove){
    let result ='';
if(playMove ==="scissors"){
if (computerMove === 'rock') {
result ='You lose.';

}else if(computerMove === 'paper'){
result= 'You win.';
} else if (computerMove === 'scissors'){
result = 'Tie.';
}
}
else if(playMove === "rock") {


if (computerMove === 'rock') {
result ='Tie.';

} else if(computerMove === 'paper'){
result= 'You lose.';
} else if (computerMove === 'scissors'){
result = 'You win.';
}
}
else if(playMove === "paper"){

if (computerMove === 'rock') {
result =' You win. ';

} else if(computerMove === 'paper'){
result= 'Tie.';
} else if (computerMove === 'scissors'){
result = 'You lose.';
}
}
if (result ==='You win.'){
score.wins += 1;
}else if (result === 'You lose.'){
score.losses += 1;
}else if (result === 'Tie.'){
score.ties += 1;
}

localStorage.setItem('score',JSON.stringify(score));

updateScoreElement();
document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = `You
<img src="${playMove}.png"class="move-icon1">
<img src="${computerMove}.png" class="move-icon1"> computer`

}

function updateScoreElement(){
    document.querySelector('.js-score')
 .innerHTML = `wins: ${score.wins},
 losses : ${score.losses},ties :${score.ties}`;
}
let computerMove='';
    function pickcomputerMove(){
        const randomNumber = Math.random();

if(randomNumber >=0 && randomNumber<= 1/3)
{ computerMove= 'rock ';

}

else if(randomNumber>= 1/3 && randomNumber<2/3) {
computerMove = 'paper';
} else if(randomNumber>= 2/3  && randomNumber<1){
computerMove= 'scissors' ;

}

    }
    
function pickcomputerMoverock(){
    const randomNumber = Math.random();

if(randomNumber >=0 && randomNumber<= 1/3)
{ computerMove= 'rock ';

}

else if(randomNumber>= 1/3 && randomNumber<2/3) {
computerMove = 'paper';
} else if(randomNumber>= 2/3  && randomNumber<1){
computerMove= 'scissors' ;
}
}
function pickcomputerMovescissors(){
const randomNumber = Math.random();

if(randomNumber >=0 && randomNumber<= 1/3)
{ computerMove= 'rock ';

}

else if(randomNumber>= 1/3 && randomNumber<2/3) {
computerMove = 'paper';
} else if(randomNumber>= 2/3  && randomNumber<1){
computerMove= 'scissors' ;

}

}
function handleClick(move) {
    disableButtons();
    startCountdown(3, move);
}

function disableButtons() {
    document.getElementById('rock-button').disabled = true;
    document.getElementById('paper-button').disabled = true;
    document.getElementById('scissors-button').disabled = true;
}

function enableButtons() {
    document.getElementById('rock-button').disabled = false;
    document.getElementById('paper-button').disabled = false;
    document.getElementById('scissors-button').disabled = false;
}

function startCountdown(seconds, move) {
    let countdownElement = document.getElementById('countdown');
    countdownElement.textContent = seconds;
    let countdownInterval = setInterval(() => {
        seconds--;
        if (seconds > 0) {
            countdownElement.textContent = seconds;
        } else {
            clearInterval(countdownInterval);
            countdownElement.textContent = '';
            enableButtons();
            if (move === 'rock') {
                pickcomputerMoverock();
            } else if (move === 'paper') {
                pickcomputerMove();
            } else if (move === 'scissors') {
                pickcomputerMovescissors();
            }
            playgame(move);
        }
    }, 1000);
}