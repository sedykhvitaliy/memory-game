let flippedCards = [];
let matchedCards = [];
let gameStarted = false;
let countdown;
let startButton;
let stopButton;
let timerDisplay;
let errorCount = 0;
let errorDisplay;
let moveCount = 0;
let moveDisplay;
let cards;
let gameStatus;

function flipCard() {
  if (!gameStarted) {
    startGame();
  }

  const cardContainer = this;
  const card = this.querySelector('.card');

  if (flippedCards.length < 2 && !cardContainer.classList.contains('flip') && !matchedCards.includes(cardContainer)) {
    cardContainer.classList.add('flip'); /* less 2 cards opened and this card isn't opened and card wasn't found in matched cards */
    flippedCards.push(cardContainer);

    if (flippedCards.length === 2) {
      const firstCard = flippedCards[0].querySelector('.card').textContent;
      const secondCard = flippedCards[1].querySelector('.card').textContent;

      moveCount++;
      moveDisplay.textContent = `${moveCount}`;

      if (firstCard === secondCard) {
        matchedCards.push(flippedCards[0], flippedCards[1]);
        flippedCards = [];

        if (matchedCards.length === cards.length) {
          clearInterval(countdown);
          gameStatus.textContent = 'YOU WON!';

        }
      } else {
        errorCount++;
        errorDisplay.textContent = `${errorCount}`;
        setTimeout(() => {
          flippedCards.forEach(card => card.classList.remove('flip'));
          flippedCards = [];
        }, 500);
      }
    }
  }
}

function startGame() {
  gameStarted = true;
  startButton.style.display = 'none';
  stopButton.style.display = 'block'; /* shows stop button */
  startTimer(59);
}

function startTimer(duration) {
  let timer = duration;
  countdown = setInterval(function () {
    timerDisplay.textContent = timer;
    if (--timer < 0) {
      clearInterval(countdown);
      stopButton.click();
      gameStatus.textContent = 'YOU LOST!';
    }
  }, 1000);
}

function flipAllCardsToFront() {
  cards.forEach(card => {
    card.classList.remove('flip');
  });
}

function shuffleCards() {
  const container = document.querySelector('.container');
  const shuffledCards = Array.from(cards).sort(() => Math.random() - 0.5);
  container.innerHTML = ''; /* delete all cards */
  shuffledCards.forEach(card => container.appendChild(card)); /* push shuffled carsds back */
  cards = document.querySelectorAll('.full-card');
}

document.addEventListener('DOMContentLoaded', () => {
  startButton = document.getElementById('start');
  stopButton = document.getElementById('stop');
  timerDisplay = document.getElementById('timer');
  errorDisplay = document.getElementById('errorDisplay');
  moveDisplay = document.getElementById('moveDisplay');
  gameStatus = document.getElementById('game-status');

  cards = document.querySelectorAll('.full-card');

  startButton.addEventListener('click', startGame);

  stopButton.addEventListener('click', () => {
    gameStarted = false;
    stopButton.style.display = 'none';
    startButton.style.display = 'block'; /* shows start button */
    clearInterval(countdown);
    timerDisplay.textContent = "60";
    flipAllCardsToFront();
    flippedCards = [];
    matchedCards = [];
    errorCount = 0;
    errorDisplay.textContent = `${errorCount}`;
    moveCount = 0;
    moveDisplay.textContent = `${moveCount}`;
    gameStatus.textContent = '';  
    shuffleCards();
  });

  cards.forEach(card => card.addEventListener('click', flipCard));

  stopButton.style.display = 'none';
  shuffleCards();
});
