let secretNumber, attempts;

function startGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById('guessInput').disabled = false;
  document.getElementById('message').textContent = '';
}

function checkGuess() {
  const guessInput = document.getElementById('guessInput');
  const message = document.getElementById('message');

  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = 'Please enter a valid number between 1 and 100.';
    return;
  }

  attempts++;

  if (userGuess === secretNumber) {
    message.textContent = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`;
    message.style.color = 'green';
    guessInput.disabled = true;
  } else {
    const hint = userGuess > secretNumber ? 'Too high!' : 'Too low!';
    message.textContent = `Incorrect. ${hint} Try again.`;
    message.style.color = 'red';
  }
}

function restartGame() {
  startGame();
  document.getElementById('guessInput').value = '';
}

function endGame() {
  document.getElementById('message').textContent = `The correct number was ${secretNumber}. Game ended.`;
  document.getElementById('message').style.color = 'blue';
  document.getElementById('guessInput').disabled = true;
}
// Start the game when the page loads
startGame();
