let randomNumber = Math.floor(Math.random() * 20) + 1;
let guessInput = document.getElementById("guess");
let guessCountElement = document.getElementById("countGuess");
let guessButton = document.querySelector("button[onclick='check()']");
let guessCount = 0;

const MAX_GUESSES = 5;

function check() {
  let guess = guessInput.value;
  if (!hasWon) {
    guessCount++;
    guessCountElement.textContent = `Number of guess: ${guessCount}`;
  }
  if (guess === String(randomNumber)) {
    document.getElementById("result").innerHTML = "You win!";
    hasWon = true;
    endGame();
  } else if (guess > randomNumber) {
    document.getElementById("result").innerHTML = "Too high";
  } else if (guess < randomNumber) {
    document.getElementById("result").innerHTML = "Too low";
  }
  if (guessCount >= MAX_GUESSES) {
    document.getElementById(
      "result"
    ).innerHTML = `Game Over! The number was ${randomNumber}`;
    endGame();
  }
}

function reset() {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  document.getElementById("result").innerHTML = "";
  guessInput.value = "";
  guessCount = 0;
  guessInput.disabled = false;
  guessButton.disabled = false;

  hasWon = false;
  startGame();
}

let timer = 30;
let intervalId;
let hasWon = false;

function decrementTimer() {
  if (hasWon || timer === 0) {
    clearInterval(intervalId);
    return;
  }
  timer--;
  document.querySelector("#timer").textContent = `Time: ${timer}`;
  if (timer === 0) {
    document.querySelector("#result").textContent = `Game Over!`;
    endGame();
  }
}

function startGame() {
  timer = 30;
  hasWon = false;
  document.querySelector("#timer").textContent = `Time: ${timer}`;
  intervalId = setInterval(decrementTimer, 1000);
}

function endGame() {
  clearInterval(intervalId);
  guessInput.disabled = true;
  guessButton.disabled = true;
}

startGame();
