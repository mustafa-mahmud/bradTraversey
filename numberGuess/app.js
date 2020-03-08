/*
GAME RULES::
1 - Player must guess a number between a min and max
2 - Player gets a certain amount of guesses
3 - Notify Player of guesses remaining
4 - Notify the Player of the correct answer if loose
5 - Let player choose to play again
*/

//Necessary variables
let min = 1,
	max = 10,
	winning = randomNum(min, max),
	guessLeft = 3;

//UI variables
const divGame = document.getElementById('game');
const spanMin = document.querySelector('.min');
const spanMax = document.querySelector('.max');
const form = document.getElementById('form');
const inputGuess = document.getElementById('guess');
const btnSubmit = document.getElementById('submit');
const pMsg = document.querySelector('.message');

//put min and max value on UI
spanMin.textContent = min;
spanMax.textContent = max;

form.addEventListener('submit', ckNum);

function ckNum(e) {
	e.preventDefault();

	//change submit btn if it played befor
	btnSubmit.value = 'SUBMIT';

	//ck user input number
	if (isNaN(inputGuess.value) || inputGuess.value < min || inputGuess.value > max || inputGuess.value === '') {
		processMSG(`Pls put number between ${min} & ${max}`, 'red');
	} else {
		winOrLoose(inputGuess.value);
	}

}

//put loose msg or won msg
function processMSG(msg, color) {
	pMsg.style.display = 'block';
	pMsg.textContent = msg;
	pMsg.style.color = color;
}

//dicided won or loose
function winOrLoose(num) {
	pMsg.style.display = 'none';

	if (parseInt(num) === winning) {
		processMSG(`YOU WON THE GAME !!!`, 'green');
		gameOver();
	} else {
		guessLeft -= 1;
		processMSG(`You have left ${guessLeft} remaining try!`, 'red');

		if (guessLeft < 1) {
			processMSG(`GAME OVER, YOU LOST! WINNING NUMBER WAS ${winning}`, 'red');
			gameOver();
		}
	}
}

//if game over, then do these
function gameOver() {
	inputGuess.disabled = true;
	if (btnSubmit.value === 'SUBMIT') {
		btnSubmit.value = 'PLAY-AGAIN';
	}
}

btnSubmit.addEventListener('click', function () {
	if (btnSubmit.value === 'PLAY-AGAIN') {
		location.reload();
	}
});

//calculated random winning number between min to max
function randomNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}