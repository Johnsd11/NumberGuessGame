'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

//Check guess button
document.querySelector('.check').addEventListener('click', function () {
    //console.log(document.querySelector('.guess').value);
    let guess = Number(document.querySelector('.guess').value);

    //first check if there is a value first
    if (score > 1) {
        if (!guess) {
            displayMessage('🛑 no number!');
        }
        //guess is too high
        else if (guess !== secretNumber) {
            displayMessage(guess > secretNumber ? '👆 Too High!' : '👇 Too Low!');
            document.querySelector('.score').textContent = --score;
        }
        //guess is correct
        else if (guess === secretNumber) {
            displayMessage('🎊 Correct Number!');
            document.querySelector('.number').textContent = secretNumber;
            //acess css with style keyword, and if next word has more then two words use camelCase
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
        }
    }
    else {
        displayMessage('😭 you lose!');
        document.querySelector('.score').textContent = 0;
    }

});


//Again button
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    //reset score
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    //reset size and background color
    document.querySelector('.number').style.width = '15rem';

});